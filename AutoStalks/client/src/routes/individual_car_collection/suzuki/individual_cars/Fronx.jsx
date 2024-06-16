import NameRatings from "../../../../components/cars/individual_cars/NameRatings";
import InitialData from "../../../../components/cars/individual_cars/InitialData";
import VariantsDetails from "../../../../components/cars/individual_cars/VariantsDetails";
import ShortDetails from "../../../../components/cars/individual_cars/ShortDetails";
import Colors from "../../../../components/cars/individual_cars/Colors";
import MoreDetails from "../../../../components/cars/individual_cars/MoreDetails";
import StatePrices from "../../../../components/cars/individual_cars/StatePrices";

export default function Fronx() {
  return (
    <body className="bg-gradient-to-r from-black from-5% via-gray-900 via-50% to-black to-98%">
      <NameRatings />
      <InitialData />

      <div class="flex">
        <div class="flex-grow-2 basis-2/3">
          <div>
            <h1 class="text-[#bcecff] font-bold text-3xl mt-16 ml-10 mb-5">
              Variants / Price
            </h1>
          </div>
          <VariantsDetails />
        </div>

        <div class="flex-grow-1 basis-1/2">
          <div>
            <h1 class="text-[#bcecff] font-bold text-3xl mt-16 ml-10 mb-5">
              STATES Price
            </h1>
          </div>
          <StatePrices />
        </div>
      </div>

      <ShortDetails />
      <div className="bg-gradient-to-r from-black from-5% via-gray-900 via-50% to-black to-9% ">
        <h1 className="text-[#bcecff] font-bold text-3xl mt-16 ml-10 mb-2">
          Colours
        </h1>
        <p className="text-[#82c6e1b8] font-medium ml-10 mb-8 w-3/5">
          Maruti Fronx 2024 is available/sold in the following colours in India.
        </p>
      </div>
      <Colors />
      <MoreDetails />
      <MoreDetails />
      <MoreDetails />
      <div className="bg-gradient-to-r from-black from-5% via-gray-900 via-50% to-black to-9% ">
        <h1 className="text-[#bcecff] font-bold text-3xl mt-16 ml-10 mb-2">
          Maruti Fronx Summary
        </h1>
        <p className="text-[#82c6e1b8] font-medium ml-10 mb-8 w-3/5">
          Latest Update Select Maruti Suzuki dealers are offering huge discounts
          this month. The Fronx is available with benefits of up to Rs. 70,000
          in February 2024. Price Maruti Fronx price ranges between Rs. 7.51
          Lakh - Rs. 13.03 Lakh depending on the variant selected. When was the
          Maruti Fronx launched? The Maruti Suzuki Fronx was launched in India
          on 24 April, 2023. What variants does it get? The Baleno-based Fronx
          is available in five variants – Sigma, Delta, Delta+, Zeta, and Alpha.
          What features are available in the Maruti Fronx? On the outside, the
          Fronx features LED headlamps, LED tail lights, 16-inch dual-tone alloy
          wheels, contrast-coloured faux skid plates, and silver roof rails. The
          model, which has a seating capacity of five occupants, is offered in
          nine colours, namely Arctic White, Grandeur Grey, Earthen Brown,
          Splendid Silver, Opulent Red, Earthen Brown with Bluish Black roof,
          Opulent Red with Bluish Black roof, and Splendid Silver with a Bluish
          Black roof. Inside, the model receives features such as six airbags, a
          360-degree camera, HUD, a nine-inch SmartPlay Pro+ touchscreen
          infotainment system, Apple CarPlay and Android Auto connectivity,
          cruise control, UV cut glass, rear AC vents, and a wireless charger.
          What are the engine, performance, and specifications of the Maruti
          Fronx? The Maruti Fronx is powered by a 1.2-litre, four-cylinder, NA
          petrol engine that generates an output of 89bhp and 113Nm of torque
          and a 1.0-litre, three-cylinder, turbo-petrol engine that produces
          99bhp and 147Nm of torque. Gearbox options include a five-speed manual
          unit, an AMT unit, and a six-speed torque converter automatic unit. Is
          the Maruti Fronx a safe car? The Fronx coupe-SUV has not been tested
          by any NCAP body yet. What are the rivals to the Maruti Fronx? The
          Fronx competes against the Hyundai Venue, Kia Sonet, Renault Kiger,
          Nissan Magnite, Mahindra XUV300, and Tata Nexon.
        </p>
      </div>
      <MoreDetails />
    </body>
  );
}
