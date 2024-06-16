import Navbar from "../common_components/Navbar";
import image from "../../images/maxresdefault.png";

export default function BlogsContainer() {
  return (
    <>
      <Navbar />
      <main class="text-white bg-gradient-to-r from-black from-10% via-gray-500 via-50% to-black to-95%">
        <div class="flex justify-between mx-auto max-w-screen-xl bg-[#0c0b0b7c] rounded-3xl pt-10">
          <article class="mx-auto max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  ></img>
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best practices for successful prototypes
              </h1>
            </header>
            <p class="lead pb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              recusandae totam nam, repudiandae atque placeat exercitationem.
              Nemo animi minus veritatis neque. Aspernatur, pariatur ex aut odit
              impedit, laudantium rerum aperiam architecto odio dolores,
              officiis deleniti quod assumenda nostrum ad! Deserunt itaque
              voluptate sit, eos pariatur illo blanditiis, enim corporis nisi
              amet quasi iusto repellat aspernatur quaerat aliquam praesentium
              quas. Facere qui perferendis doloribus explicabo voluptatum
              provident ratione eveniet hic aperiam maiores, sit, dolorum quo
              aliquam saepe. Optio laboriosam, aut, excepturi quaerat enim
              cumque voluptas ipsam consectetur, rerum adipisci voluptatibus.
              Quas vitae porro sint fugiat nisi? Provident aspernatur beatae
              odit ea?
            </p>
            <figure className="pb-10">
              <img src={image} className="rounded w-11/12"></img>
            </figure>

            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dolore voluptatem odit obcaecati, expedita quidem unde commodi
              laudantium veritatis rerum temporibus voluptate fugiat beatae modi
              consequatur illo rem suscipit sapiente a voluptatum asperiores!
              Deleniti illo impedit officia quia, et veritatis reiciendis eum
              cum voluptatem?
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dolore voluptatem odit obcaecati, expedita quidem unde commodi
              laudantium veritatis rerum temporibus voluptate fugiat beatae modi
              consequatur illo rem suscipit sapiente a voluptatum asperiores!
              Deleniti illo impedit officia quia, et veritatis reiciendis eum
              cum voluptatem?
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dolore voluptatem odit obcaecati, expedita quidem unde commodi
              laudantium veritatis rerum temporibus voluptate fugiat beatae modi
              consequatur illo rem suscipit sapiente a voluptatum asperiores!
              Deleniti illo impedit officia quia, et veritatis reiciendis eum
              cum voluptatem?
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dolore voluptatem odit obcaecati, expedita quidem unde commodi
              laudantium veritatis rerum temporibus voluptate fugiat beatae modi
              consequatur illo rem suscipit sapiente a voluptatum asperiores!
              Deleniti illo impedit officia quia, et veritatis reiciendis eum
              cum voluptatem?
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              dolore voluptatem odit obcaecati, expedita quidem unde commodi
              laudantium veritatis rerum temporibus voluptate fugiat beatae modi
              consequatur illo rem suscipit sapiente a voluptatum asperiores!
              Deleniti illo impedit officia quia, et veritatis reiciendis eum
              cum voluptatem?
            </p>

            <figure className="py-10">
              <img src={image} className="rounded w-11/12"></img>
            </figure>

            <h1 className="text-2xl font-bold pb-3">
              heading for some content:
            </h1>
            <p className="pb-3">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3 className="font-bold pb-3">Type classification</h3>
            <h4>Serif</h4>
            <p className="pb-10">
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Date &amp; Time</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>United States</td>
                  <td>April 21, 2021</td>
                  <td>
                    <strong>$2,300</strong>
                  </td>
                </tr>
                <tr>
                  <td>Canada</td>
                  <td>May 31, 2021</td>
                  <td>
                    <strong>$300</strong>
                  </td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>June 3, 2021</td>
                  <td>
                    <strong>$2,500</strong>
                  </td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>June 23, 2021</td>
                  <td>
                    <strong>$3,543</strong>
                  </td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>July 6, 2021</td>
                  <td>
                    <strong>$99</strong>
                  </td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>August 23, 2021</td>
                  <td>
                    <strong>$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="pb-10">
              Best practices for setting up your prototype
            </h3>
            <p className="pb-3">
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
          </article>
        </div>

        <aside
          aria-label="Related articles"
          class="py-8 lg:py-24 bg-[#0c0b0b7c]"
        >
          <div class="px-4 mx-auto max-w-screen-xl">
            <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article class="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    class="mb-5 rounded-lg"
                    alt="Image 1"
                  ></img>
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article class="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                    class="mb-5 rounded-lg"
                    alt="Image 2"
                  ></img>
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p class="mb-4  text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </article>
              <article class="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                    class="mb-5 rounded-lg"
                    alt="Image 3"
                  ></img>
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered with Google</a>
                </h2>
                <p class="mb-4  text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 8 minutes
                </a>
              </article>
              <article class="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                    class="mb-5 rounded-lg"
                    alt="Image 4"
                  ></img>
                </a>
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <p class="mb-4  text-gray-500 dark:text-gray-400">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 4 minutes
                </a>
              </article>
            </div>
          </div>
        </aside>
      </main>

      <section class="bg-[#0c0b0b7c]">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div class="relative w-full">
                  <label
                    for="email"
                    class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    class="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer class="bg-[#0c0b0b7c] antialiased">
        <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
          <div class="text-center">
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2020-2025 . All Rights Reserved.
            </span>
            <ul class="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <svg
                    class="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
