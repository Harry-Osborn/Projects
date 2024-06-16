import Image from "../images/dark_grids.jpg";
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const background = {
    backgroundImage: `url(${Image})`,
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    zIndex: "-1",
  };

  const [password, setPassword] = useState("");

  const { token } = useParams();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    // sending the data to the server
    Axios.post("http://localhost:6060/auth/reset-password/" + token, {
      password,
    })
      .then((response) => {
        // this is used to redirect the user to the login page whenever the form is submitted
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={background}></div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-300/10 p-10">
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
              NEW password
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yelow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
