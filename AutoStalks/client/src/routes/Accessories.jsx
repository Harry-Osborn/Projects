import { useState } from "react";
import { details } from "../components/accessories/details";
import Navbar from "../components/common_components/Navbar";

export default function Accessories() {
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
          className="container p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 px-5 w-10/12 pb-4 mb-4"
          style={brandsContainer}
        >
          {details
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((data) => (
              <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-2xl border bg-gray-700 shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                  <img
                    class="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={data.img1}
                  />
                  <img
                    class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                    src={data.img2}
                  />
                  <svg
                    class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                    />
                  </svg>
                </a>
                <div class="mt-4 px-5 pb-5">
                  <h5 class="text-xl tracking-tight text-white">{data.name}</h5>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-3xl font-bold text-white">
                        {data.pricing}
                      </span>
                      <span class="text-sm text-white line-through">
                        {data.cutpricing}
                      </span>
                    </p>
                  </div>
                  <a
                    href={data.link}
                    class="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
