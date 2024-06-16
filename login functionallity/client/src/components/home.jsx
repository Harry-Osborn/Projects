import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-black h-screen text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <ul className="flex items">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mr-6">
              <a href="/login" className="hover:text-gray-400">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                  login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container flex flex-col items-center mt-3">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">
          This is a black landing page with a navigation bar.
        </p>
        <p>Add your stunning images and content here.</p>
      </div>
    </div>
  );
}
