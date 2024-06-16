import Price from "../../../images/rupee.png";
import Mileage from "../../../images/oil-barrel.png";
import Engine from "../../../images/car-engine.png";
import Fuel from "../../../images/gas-pump.png";
import Transmission from "../../../images/manual-transmission.png";
import Seating from "../../../images/chair.png";
import rating from "../../../images/good-feedback.png";

import Carousel from "./Carousel";

export default function InitialData() {
  return (
    <>
      <div class="flex">
        <Carousel />
        {/* <!-- this section contains the tables for displaying details of the car --> */}
        <div class="overflow-hidden rounded-lg ml-20 mt-5 w-1/3">
          <table class="w-full text-sm text-left text-white">
            <thead class="text-xs text-white uppercase bg-gray-500/15 font-extrabold">
              <tr>
                <th></th>
                <th class="p-3 w-1/6">Specification</th>
                <th class="p-3 w-5/6 text-right">Details</th>
              </tr>
            </thead>
            <tbody class="font-bold bg-gray-600/10">
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td style={{ width: "10%" }} class="align-center">
                  <img
                    src={Price}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Price</td>
                <td class="p-3 text-right">Rs. 8.83 Lakh onwards</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={Mileage}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Mileage</td>
                <td class="p-3 text-right">20.01 to 28.51 kmpl</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={rating}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Global Encap Rating</td>
                <td class="p-3 text-right">⭐⭐⭐</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={Engine}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Engine</td>
                <td class="p-3 text-right">998 to 1197 cc</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={Fuel}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Fuel Type</td>
                <td class="p-3 text-right">Petrol &amp; CNG</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={Transmission}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Transmission</td>
                <td class="p-3 text-right">Manual &amp; Automatic</td>
              </tr>
              <tr class="border-b border-gray-800/50 hover:bg-black/40">
                <td>
                  <img
                    src={Seating}
                    style={{ width: "100%", height: "100%" }}
                    className="pl-3"
                  />
                </td>
                <td class="p-3 font-semibold text-left">Seating Capacity</td>
                <td class="p-3 text-right">5 Seater</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
