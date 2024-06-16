import { useState } from "react";
import Navbar from "../components/common_components/Navbar";
import SingleBlog from "../components/blogs_page/SingleBlog";
import BigSingleBlog from "../components/blogs_page/BigSingleBlog";
import { Blog_Container_Data } from "../components/blogs_page/BlogContainerData";
import { Main_Blog_Container_Data } from "../components/blogs_page/MainBlogData";

export default function Blogs() {
  const [numOfPosts, setNumOfPosts] = useState(6); // Initial number of posts to display

  const handleLoadMore = () => {
    setNumOfPosts(numOfPosts + 3); // Increase the number of posts to display by 3
  };

  return (
    <>
      <body className="bg-gradient-to-r from-black from-4% via-gray-500 via-50% to-black to-96% dark:text-gray-100">
        <Navbar />

        <section>
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            {Main_Blog_Container_Data.map((data) => (
              <BigSingleBlog key={data.id} {...data} />
            ))}
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Blog_Container_Data.slice(0, numOfPosts).map((data) => (
                <SingleBlog key={data.id} {...data} />
              ))}
            </div>
            {numOfPosts < Blog_Container_Data.length && ( // Render "Load more posts" button conditionally
              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
                  onClick={handleLoadMore}
                >
                  Load more posts...
                </button>
              </div>
            )}
          </div>
        </section>
      </body>
    </>
  );
}
