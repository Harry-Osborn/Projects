import mainImage from "../../images/blog.png";

export default function BigSingleBlog(props) {
  return (
    <>
      <a
        href={props.Mainlink}
        className="block rounded-3xl max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#000000a5] transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
      >
        <img
          src={props.Mainimage}
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {props.Mainheading}
          </h3>
          <span className="text-xs dark:text-gray-400">{props.Maindate}</span>
          <p>{props.MainContent}</p>
        </div>
      </a>
    </>
  );
}
