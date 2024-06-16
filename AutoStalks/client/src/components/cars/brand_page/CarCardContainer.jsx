import CarCard from "./CarCard";
import { Brand_Info } from "./individual_car_details/suzuki";

export default function CarCardContainer() {
  const container = {
    borderRadius: "30px",
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-10 px-5 py-4 mx-12 mb-10 bg-black/50"
          style={container}
        >
          {Brand_Info.map((data) => (
            <CarCard {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
