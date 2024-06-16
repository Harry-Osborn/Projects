import Color1 from "../../../images/enfield_bikes/Super_Meteor/1.png";
import Color2 from "../../../images/enfield_bikes/Super_Meteor/2.png";
import Color3 from "../../../images/enfield_bikes/Super_Meteor/3.png";

import { Carousel } from "flowbite-react";

export default function Colors() {
  return (
    <div
      id="indicators-carousel"
      class="relative ml-10 mt-5"
      data-carousel="static"
      style={{ width: "50%" }}
    >
      <div className="h-100 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={1500}>
          <img src={Color1} />
          <img src={Color2} />
          <img src={Color3} />
        </Carousel>
      </div>
    </div>
  );
}

// export default function Colors() {
//   return (
//     <>
//       <div class="flex mb-10 h-1/4">
//         <div
//           id="indicators-carousel"
//           class="relative ml-10 mt-5"
//           data-carousel="static"
//           style={{ width: "50%" }}
//         >
//           {/* <!-- Carousel wrapper --> */}
//           <div
//             class="relative h-56 overflow-hidden rounded-lg md:h-96"
//             style={{ backgroundColor: "rgb(0, 0, 0)" }}
//             id="colors"
//           >
//             {/* <!-- Item 1 --> */}
//             <div
//               class="hidden duration-700 ease-in-out"
//               data-carousel-item="active"
//             >
//               <img
//                 src={Color1}
//                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               />
//               <p class="text-black font-extrabold text-2xl text-center pt-2">
//                 blue
//               </p>
//             </div>
//             {/* <!-- Item 2 --> */}
//             <div class="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={Color2}
//                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               />
//               <p class="text-white font-bold text-2xl">white</p>
//             </div>
//             {/* <!-- Item 3 --> */}
//             <div class="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={Color3}
//                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               />
//             </div>
//           </div>
//           {/* <!-- Slider indicators --> */}
//           <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="true"
//               aria-label="Slide 1"
//               data-carousel-slide-to="0"
//             ></button>
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 2"
//               data-carousel-slide-to="1"
//             ></button>
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 3"
//               data-carousel-slide-to="2"
//             ></button>
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 4"
//               data-carousel-slide-to="3"
//             ></button>
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 5"
//               data-carousel-slide-to="4"
//             ></button>
//             <button
//               type="button"
//               class="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 5"
//               data-carousel-slide-to="5"
//             ></button>
//           </div>
//           {/* <!-- Slider controls --> */}
//           <button
//             type="button"
//             class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-prev
//           >
//             <span
//               class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
//               id="previous"
//             >
//               <svg
//                 class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//               <span class="sr-only">Previous</span>
//             </span>
//           </button>
//           <button
//             type="button"
//             class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-next
//           >
//             <span
//               class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
//               id="next"
//             >
//               <svg
//                 class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//               <span class="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
