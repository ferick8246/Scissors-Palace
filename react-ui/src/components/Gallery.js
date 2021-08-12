import React from "react";

function Gallery() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            View Our Work
          </h1>
        </div>

        <div className="grid-flow-row">
          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-1.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    TAPER FADE
                  </h2>
                  <p className="leading-relaxed">
                  Start lookin fresh with a fade that tapers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-2.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    THE BUNS
                  </h2>
                  <p className="leading-relaxed">
                  Unless you got buns huns
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-4.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE RACHELLE
                  </h2>
                  <p className="leading-relaxed">
                  "... And just to let you know... we were on a break!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-5.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE KAREN
                  </h2>
                  <p className="leading-relaxed">
                  "May I speak to your manager?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-6.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE KRAVITZ
                  </h2>
                  <p className="leading-relaxed">
                  "But what I really want to know is
                  Are you gonna go my way?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/haircut-7.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE WEEKND
                  </h2>
                  <p className="leading-relaxed">
                  "I can't feel my face when I'm with you, but I love it"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/kawhi-leonard.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE KAWHI LEONARD
                  </h2>
                  <p className="leading-relaxed">
                  "I'm a fun guy."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./images/Mr-T.jpg"
                ></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE MR. T
                  </h2>
                  <p className="leading-relaxed">
                  "I pity the fool"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
