import { useState } from "react";

export default function MoreDetails() {
  const [hiddenRows, setHiddenRows] = useState(5); // Initially hide the last 5 rows

  const data = [
    { model: "XL", price: 30000 }, // This row will be hidden initially
    { model: "JT", price: 252345345 }, // This row will be hidden initially
    { model: "ABBT", price: 423453425 }, // This row will be hidden initially
    { model: "EGG", price: 282345345 }, // This row will be hidden initially
    { model: "Da", price: 35124234 }, // This row will be hidden initially
    { model: "Sar", price: 221242134 }, // This row will be hidden initially
    { model: "Mic", price: 382345 }, // This row will be hidden initially
    { model: "Eliz", price: 242345234 }, // This row will be hidden initially
  ];

  const handleShowMore = () => {
    setHiddenRows((prevState) => (prevState === 0 ? 5 : 0));
  };

  return (
    <>
      <div class="flex flex-col mt-16">
        <div class="overflow-hidden rounded-xl w-3/5 ml-10 mr-5">
          <table class="w-full text-sm text-left text-white font-bold">
            <thead class="text-xs text-white uppercase bg-gray-500/20">
              <tr>
                <th class="p-3 pl-10 w-1/2">Variant</th>
                <th class="p-3 pr-20 w-1/2 text-right">On-Road Price</th>
              </tr>
            </thead>

            <tbody className="bg-gray-600/15">
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    display: index < data.length - hiddenRows ? "" : "none",
                  }}
                  className="border-b border-gray-800/60 hover:bg-black/40"
                >
                  <td class="p-3 pl-10 text-truncate">{item.model}</td>
                  <td class="p-3 pr-20 text-truncate text-right">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="overflow-hidden shadow rounded-lg w-3/5 ml-10 mr-5 mt-5 mb-10">
          <button
            className="w-full text-sm text-center bg-yellow-600/5 p-3 text-white font-bold hover:bg-yellow-400/10"
            onClick={handleShowMore}
          >
            {hiddenRows === 0 ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
}
