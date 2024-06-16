import logo from "../../images/logos.png";

const styling = {
  width: "12%",
  height: "12%",
};

export default function Navbar() {
  return (
    <>
      <div class="container mx-auto flex flex-wrap px-3 flex-col md:flex-row items-center text-white py-4 bg-black">
        <a
          class="title-font font-medium items-center mb-4 md:mb-0 ml-5 text-xl"
          href="/"
        >
          <div className="flex flex-row">
            <img src={logo} style={styling} />
            <div className="flex items-center">
              <p class="font-extrabold text-2xl pl-4">AUTO STALKS</p>
            </div>
          </div>
        </a>
        <div class="md:ml-auto flex flex-wrap items-center text-base font-bold justify-center pr-10">
          <a
            class="transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-125 hover:text-red-400 duration-300 cursor-grab"
            href="/home"
          >
            Cars
          </a>
          <p class="pl-3 pr-3 text-red-600 text-2xl">|</p>
          <a
            class="transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-125 hover:text-red-400 duration-300 cursor-grab"
            href="/bikes"
          >
            Bikes
          </a>
          <p class="pl-3 pr-3 text-red-600 text-2xl">|</p>
          <a
            class="transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-125 hover:text-red-400 duration-300 cursor-grab"
            href="/blogs"
          >
            Blogs
          </a>
          <p class="pl-3 pr-3 text-red-600 text-2xl">|</p>
          <a
            class="transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-110 hover:text-red-400 duration-300 cursor-grab"
            href="/shop"
          >
            Accessories
          </a>
        </div>

        <a href="/login">
          <button class="inline-flex items-center border-0 py-2 px-10 md:mt-0 mr-3 font-bold rounded-md bg-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-yellow-500 duration-300">
            login
          </button>
        </a>
      </div>
    </>
  );
}
