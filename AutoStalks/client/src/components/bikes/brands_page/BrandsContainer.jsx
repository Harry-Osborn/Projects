import BrandContainer from "./BrandContainer.jsx";
import { Brand_Info } from "./BrandImagesData.js";

export default function BrandsInfoContainer() {
  const brandsContainer = {
    backgroundColor: "black",
    borderRadius: "30px",
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          class="container p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10 px-5 w-4/5 pb-4 mb-4"
          style={brandsContainer}
        >
          {Brand_Info.filter((item) => {
            return search.toLowerCase() === ""
              ? props
              : props.brandName.toLowerCase().includes(search);
          }).map((data) => (
            <BrandContainer {...data} />
          ))}
        </div>
      </div>
    </>
  );
}
