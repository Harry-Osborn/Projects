import { useState } from "react";

export default function VariantsDetails() {
  const [hiddenRows, setHiddenRows] = useState(3); // Initially hide the last 3 rows

  const data = [
    { model: "XL", price: 30000 },
    { model: "JT", price: 252345345 },
    { model: "ABBT", price: 423453425 },
    { model: "EGG", price: 282345345 },
    { model: "Da", price: 35124234 },
    { model: "Sar", price: 221242134 }, // This row will be hidden initially
    { model: "Mic", price: 382345 }, // This row will be hidden initially
    { model: "Eliz", price: 242345234 }, // This row will be hidden initially
  ];

  const handleShowMore = () => {
    setHiddenRows((prevState) => (prevState === 0 ? 3 : 0));
  };

  return (
    <>
      <div class="flex flex-col mb-16">
        <div class="overflow-hidden rounded-xl ml-10 mr-5">
          <table class="w-full text-sm text-left text-white font-bold">
            <thead class="text-xs text-white uppercase bg-gray-500/20">
              <tr>
                <th class="p-3 pl-10 w-1/4">Variant</th>
                <th class="p-3 pr-20 w-1/4 text-center">transmission</th>
                <th class="p-3 pr-20 w-1/4">On-Road Price</th>
                <th class="p-3 pr-20 w-1/4">Select</th>
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
                  <td className="pl-10">MT</td>
                  <td class="p-3 pr-20 text-truncate">{item.price}</td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-0 ml-5"
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="overflow-hidden shadow rounded-lg ml-10 mr-5 mt-5">
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
