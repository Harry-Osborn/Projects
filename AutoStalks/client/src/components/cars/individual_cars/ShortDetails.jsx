import Img1 from "../../../images/key-features.png";
import Img2 from "../../../images/yes.png";
import Img3 from "../../../images/delete-button.png";

export default function ShortDetails() {
  return (
    <>
      <div class="flex mr-10 pb-10 ">
        <div class="ml-10 bg-blue-600/40 px-8 py-5 rounded-3xl transition duration-300 hover:scale-110">
          <div class="flex">
            <img src={Img1} style={{ width: "10%", height: "5%" }} />
            <h2 class="mb-2 text-xl font-bold text-white">
              &nbsp;&nbsp;Key Features:
            </h2>
          </div>
          <ul class="max-w-md space-y-1 list-disc list-inside text-gray-400">
            <li>Side and curtain airbags</li>
            <li>All 3-point seat belts</li>
            <li>Auto-dimming inside rearview mirror</li>
            <li>Electronic Stability Program (ESP)</li>
            <li>Hill hold assist</li>
            <li>360-degree camera</li>
            <li>Automatic headlamps</li>
            <li>Engine Start/Stop button</li>
            <li>Wireless Charger</li>
            <li>Steering adjust - tilt and telescopic</li>
            <li>
              ARKAMYS Premium Sound System with wireless Android Auto and Apple
              CarPlay
            </li>
            <li>Head up display</li>
            <li>Fast USB Charging Sockets -Type A and C (Rear)</li>
            <li>Suzuki Connect</li>
            <li>Alloy wheels</li>
          </ul>
        </div>

        <div
          class="ml-4 bg-green-600/40 px-8 py-5 rounded-3xl transition duration-300 hover:scale-110"
          style={{ height: "max-content" }}
        >
          <div class="flex">
            <img src={Img2} style={{ width: "5%", height: "5%" }} />
            <h2 class="mb-2 text-xl font-bold text-white">&nbsp;&nbsp;Pros:</h2>
          </div>
          <ul class="max-w-md space-y-1 list-disc list-inside text-gray-400">
            <li>
              The coupe SUV appearance makes it look refreshingly different.
            </li>
            <li>
              The powertrains have a strong output that aids drivability
              considerably.
            </li>
            <li>
              Top-of-the-line version offers all the new-age features one would
              expect.
            </li>
            <li>
              This coupe SUV is comfortable owing to how road irregularities are
              soaked.
            </li>
            <li>
              Backed by Maruti Suzuki's exhaustive and robust dealer/service
              network.
            </li>
          </ul>
        </div>

        <div
          class="ml-4 bg-red-600/40 px-10 py-5 rounded-3xl transition duration-300 hover:scale-110"
          style={{ height: "max-content" }}
        >
          <div class="flex">
            <img src={Img3} style={{ width: "5%", height: "5%" }} />
            <h2 class="mb-2 text-xl font-bold text-white">&nbsp;&nbsp;Cons:</h2>
          </div>
          <ul class="max-w-md space-y-1 list-disc list-inside text-gray-400">
            <li>The driving position is not as high as regular SUVs offer.</li>
            <li>Rear headroom can be restrictive for taller occupants.</li>
            <li>
              There's some turbo lag below 2,500rpm in the 1.0-litre engine.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
