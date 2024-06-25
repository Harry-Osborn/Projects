import os
import time
from openai import OpenAI
import speech_recognition as sr
from supabase import create_client, Client
from typing import List, Dict
from playsound import playsound

from dotenv import load_dotenv
load_dotenv()

# Configuration
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# OpenAI API key
client = OpenAI(api_key = os.getenv('OPENAI_API_KEY'))

# Initialize Supabase
def store_conversation(user_query: str, bot_response: str):
    data = {
        "query": user_query,
        "response": bot_response
    }
    supabase.table('respondedqueries').insert(data).execute()

def fetch_previous_response(query: str) -> str:
    try:
        # Fetch records from Supabase where the query is similar to the input query
        response = supabase.table('respondedqueries').select("response").eq('query', query).execute()
        
        if response.data:
            return response.data[0]['response']  # Return the first matched response

    except Exception as e:
        print(f"Error fetching previous response from supabase: {e}")

    return None

def generate_response(query: str, conversation_history: List[Dict[str, str]]) -> str:
    # Construct prompt with previous queries and responses
    prompt = "Previous queries and responses:\n\n"
    for interaction in conversation_history:
        prompt += f"User: {interaction['query']}\nBot: {interaction['response']}\n\n"
    
    prompt += "do not respond with anything like 'Based on the previous queries, here is a response to your question:'"

    # Add current query to prompt
    prompt += f"User's query: {query}\n\nBased on the above information, provide a response to the user's query."

    # Generate response using GPT-3.5 Turbo
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "you are a very accurate voice bot which remembers all the previous asked questions and answers further questions accordingly just like a human assistant"},
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content

# this is seech to text
def get_voice_input(seconds=5) -> str:
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("heed...🎙️")
        audio = r.listen(source, timeout=seconds)
    try:
        query = r.recognize_whisper_api(audio, api_key=OPENAI_API_KEY)
        return query
    except sr.RequestError as e:
        print(f"Could not request results from Whisper API; {e}")
        return ""

def delay(seconds):
    time.sleep(seconds)

def text_to_speech(text):
    response = client.audio.speech.create(
        model= "tts-1",
        voice= "nova",
        input= text,
        speed= 1
    )

    filename = "speech.mp3"

    # Save the response to a file
    with open(filename, "wb") as f:
        f.write(response.content)

    delay(1)
    
    playsound(filename)

# main code (brain of the bot)
recognizer = sr.Recognizer()
conversation_history = []

# Greet the user
text_to_speech("Greetings! what is your name?")

# asking the user for his name
user_name = get_voice_input(2)
text_to_speech(f"Greetings {user_name}! <prosody rate='fast'>I am Stella!!, your personal assistant!!. How may I assist you today?</prosody>")

# asking the user for queries
while True:
    query = get_voice_input()

    print(query.lower())

    # terminating condition
    if query.lower() in ["exit","exit."]:
        text_to_speech(f"<emphasis>Hope you like my assistance. Looking forward to assisting you further. Goodbye {user_name}! Have a great day!</emphasis>")
        break

    else:
        previous_response = fetch_previous_response(query)

        if previous_response:
            print(f"User: {query}")
            response = previous_response
            print(f"Stella: {response}")
            conversation_history.append({"query": query, "response": response})
            text_to_speech(response)

        else:
            print(f"User: {query}")
            response = generate_response(query, conversation_history)
            print(f"Stella: {response}")
            store_conversation(query, response)
            conversation_history.append({"query": query, "response": response})
            text_to_speech(response)   