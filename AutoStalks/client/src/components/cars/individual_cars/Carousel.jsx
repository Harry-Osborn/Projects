import One from "../../../images/suzuki_cars/fronx/looks/one.png";
import Two from "../../../images/suzuki_cars/fronx/looks/two.png";
import Three from "../../../images/suzuki_cars/fronx/looks/three.png";

import { Carousel } from "flowbite-react";

export default function CarouselContainer() {
  return (
    <>
      <div
        id="indicators-carousel"
        class="relative ml-10 mt-5"
        data-carousel="static"
        style={{ width: "55%" }}
      >
        <div className="h-100 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={1000}>
            <img src={One} />
            <img src={Two} />
            <img src={Three} />
          </Carousel>
        </div>
      </div>
    </>
  );
}
