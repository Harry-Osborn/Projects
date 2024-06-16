import Navbar from "../components/common_components/Navbar";
import { Brand_Info } from "../components/brands_page/BrandImagesData.js";
import { useState } from "react";

export default function Home() {
  //defining the hook for the search functionality
  const [search, setSearch] = useState("");
  console.log(search);

  const brandsContainer = {
    backgroundColor: "#0000005c",
    borderRadius: "30px",
  };

  const containerStyles = {
    borderRadius: "10%",
    padding: "5% 5% 20%",
    height: "100%",
  };

  const brandImage = {
    height: "90%",
    borderRadius: "10%",
    objectFit: "cover",
  };

  const paraStyling = {
    marginTop: "5%",
    paddingBottom: "5%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "larger",
  };

  return (
    <>
      <body className="bg-gradient-to-r from-black from-5% via-gray-500 via-50% to-black to-98%">
        <Navbar />
        <div className="flex justify-center my-14">
          <form
            className="flex items-center"
            id="search"
            style={{ width: "75%" }}
            onChange={(e) => setSearch(e.target.value)}
          >
            <label for="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search cars and more..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center">
          <div
            className="container p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10 px-5 w-4/5 pb-4 mb-4"
            style={brandsContainer}
          >
            {Brand_Info.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.brandName.toLowerCase().includes(search);
            }).map((data) => (
              <a href={data.link}>
                <div
                  className="transition duration-300 hover:scale-110 hover:bg-green-400 bg-[#ffffffd9]"
                  style={containerStyles}
                >
                  <img src={data.image} style={brandImage} />
                  <p style={paraStyling}>{data.brandName}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </body>
    </>
  );
}
