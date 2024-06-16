export default function SingleBlog(props) {
  return (
    <>
      <a
        href={props.link}
        className="rounded-3xl max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#000000a5] transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
      >
        <img
          role="presentation"
          className="object-cover w-full h-44"
          src={props.image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {props.heading}
          </h3>
          <span className="text-xs dark:text-gray-400">{props.date}</span>
          <p>{props.Content}</p>
        </div>
      </a>
    </>
  );
}
