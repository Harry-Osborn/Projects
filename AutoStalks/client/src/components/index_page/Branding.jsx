import Hummer from "../../images/index_hummer.png";

var design = {
  backgroundImage: "url('https://source.unsplash.com/random/640x480')",
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

export default function Branding() {
  return (
    <>
      <div
        class="items-center justify-center text-white"
        style={{ paddingTop: "8%" }}
      >
        <div class="flex">
          <div style={{ height: "500px" }} className="animate-pulse">
            <img src={Hummer} />
          </div>
          <div class="h-screen flex flex-col" style={{ height: "600px" }}>
            <div>
              <div style={{ paddingTop: "25%" }}>
                <p class="font-extrabold text-5xl">
                  SKIP THE <span className="text-red-500">DEALERSHIP</span>
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-xl font-bold opacity-50 mt-2">
                  ORDER your next car or bike online...
                </p>
              </div>

              <div className="border-gray-300 border-solid border-4 px-2 py-1 mt-5 flex justify-center">
                <div className="flex">
                  <p className="font-bold">Any Build</p>
                  <p class="px-3 text-gray-400 text-2xl font-extrabold">I</p>
                  <p className="font-bold">Any Model</p>
                  <p class="px-3 text-gray-400 text-2xl font-extrabold">I</p>
                  <p className="font-bold">Delivered At Your Door Step</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a href="/home">
                <button class="items-center border-0 py-2 px-12 font-bold rounded-md bg-orange-600 hover:scale-110 hover:bg-green-500 duration-300 opacity-80 hover:opacity-100">
                  Book a test drive
                </button>
                <span class="relative flex h-4 w-4">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </a>

              <a href="/home" className="ml-8">
                <button class="items-center border-0 py-2 px-12 font-bold rounded-md bg-orange-600 hover:scale-110 hover:bg-green-500 duration-300 opacity-80 hover:opacity-100">
                  Book a test drive
                </button>
                <span class="relative flex h-4 w-4">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <section className="m-4 md:m-8 bg-gray-200/5 py-10 dark:text-gray-100">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-bold">Built to empower every team</h2>
            <p className="dark:text-gray-400">Libero minima optio qui</p>
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Product</h3>
              <div className="space-y-1 leadi">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark:bg-gray-800/10 dark:text-gray-100">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">
                Aliquip definiebas ad est
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                Quando cetero his ne, eum admodum sapientem ut.
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                  Ad vix debet docendi
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                  etiam regione ut, persius eripuit quo id. Sit te euismod
                  tacimates.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi dark:text-gray-50">
                        Per ei quaeque sensibus
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Ex usu illum iudico molestie. Pro ne agam facete
                        mediocritatem, ridens labore facete mea ei. Pro id
                        apeirian dignissim.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi dark:text-gray-50">
                        Cu imperdiet posidonium sed
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Amet utinam aliquando ut mea, malis admodum ocurreret
                        nec et, elit tibique cu nec. Nec ex maluisset
                        inciderint, ex quis.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi dark:text-gray-50">
                        Nulla omittam sadipscing mel ne
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        At sed possim oporteat probatus, justo graece ne nec,
                        minim commodo legimus ut vix. Ut eos iudico quando
                        soleat, nam modus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img
                  src="https://source.unsplash.com/random/360x480"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">
                    Eam nibh gloriatur ex
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-400">
                    Per odio fabellas consulatu cu. Utroque detracto mel ea, quo
                    te latine theophrastus. Ea his tale nibh dissentias, mei
                    exerci tamquam euripidis cu.
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leadi dark:text-gray-50">
                          Cibo augue offendit has ad
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          An per velit appellantur, ut utinam minimum nominavi
                          sit, odio nostro habemus ne nec. Ne sonet regione
                          contentiones est.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leadi dark:text-gray-50">
                          At eum ferri luptatum lobortis
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Te per quidam maiorum ocurreret, etiam delicatissimi
                          usu ad. Ne has quod periculis. Te sit primis iisque
                          efficiantur.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leadi dark:text-gray-50">
                          Dicunt verterem evertitur eu sea
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Audire principes rationibus eam an, autem nominavi
                          luptatum per te. Sumo fabulas vim eu, sonet saperet
                          eleifend ut vix.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src="https://source.unsplash.com/random/361x481"
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="dark:text-gray-100">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                All the features you want
              </h2>
              <p className="mt-4 text-lg dark:text-gray-400">
                Pellentesque viverra, leo id euismod laoreet, nunc risus
                molestie orci, vel faucibus quam justo id mauris.
              </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Quisque at urna</dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Vivamus ultricies bibendum tortor, molestie imperdiet justo
                    cursus eu. Donec quis arcu magna. Integer tempor egestas
                    dolor.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">
                    Quisque eu dui lacinia
                  </dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Quisque ultricies volutpat sapien nec varius. Sed sit amet
                    justo vestibulum, efficitur risus quis, gravida libero.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Mauris dignissim</dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Phasellus nec molestie arcu. Proin dictum, lorem mollis
                    rutrum efficitur, lectus velit pharetra elit, et dictum
                    purus nibh auctor velit.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Proin nulla eros</dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Sed ornare ultricies gravida. Morbi egestas dolor turpis,
                    ornare laoreet est vehicula non.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Proin dictum</dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Lorem mollis rutrum efficitur, lectus velit pharetra elit,
                    et dictum purus nibh auctor velit.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">
                    Quisque eu dui lacinia
                  </dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Cras a mauris tincidunt, scelerisque justo sit amet,
                    hendrerit est. Fusce venenatis diam fringilla metus
                    convallis, at dapibus enim congue.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">
                    Cras vel bibendum tellus
                  </dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Curabitur molestie neque ac massa pulvinar, nec sollicitudin
                    nunc consequat. Donec mattis orci eros, vitae porttitor
                    risus pretium eget.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Dignissim magna</dt>
                  <dd className="mt-2 dark:text-gray-400">
                    Cras ac lectus erat. Curabitur condimentum luctus nisi, non
                    lacinia ipsum.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
