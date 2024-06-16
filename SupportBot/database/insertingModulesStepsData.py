# this program is for inserting bulk data into the database one by one from the datalist

import requests
import json

# Define the FastAPI endpoint URL
endpoint_url = "http://localhost:8000/add_data"

# Define the data to be inserted in to the database
data_list = [
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": ". ",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "Steps for using Bail Application:\n\nFirst step is to Enter your query or Upload a file in any format and click start\t\n \nOur AI system will quickly process your document.\n \nReview the AI analysis Result and click \"Continue\" to proceed.\n \nSelect the generated Bail Application Draft and click \"Continue\" then our system will process it.\n\nAfter choosing your draft, you have to answer some quick questions to provide more information about your case.\t\n \nAfter answering the questions, our AI system will process your information.\n \nFinally, your Bail Application is ready and you can download it to your device for future reference.",
        "table_name" : "moduleusesteps"
    },
    {
        "text": "",
        "table_name": "moduleusesteps"
    }
]

# Function to insert data into the FastAPI endpoint
def insert_data(data):
    try:
        response = requests.post(endpoint_url, json=data)
        if response.status_code == 200:
            print("Data added successfully:", data)
        else:
            print("Error adding data:", response.text)
    except Exception as e:
        print("Exception occurred:", str(e))

# Insert each data entry one by one
for data_entry in data_list:
    insert_data(data_entry)
