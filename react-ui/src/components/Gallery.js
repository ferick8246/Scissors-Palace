import React from "react";

function Gallery() {
  return (
    <section>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            View Our Work
          </h1>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-1.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  TAPER FADE
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                Start lookin fresh with a fade that tapers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-2.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                  THE BUNS
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                Unless you got buns huns
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-4.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE RACHELLE
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "... And just to let you know... we were on a break!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-5.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE KAREN
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "May I speak to your manager?"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-6.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE KRAVITZ
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "But what I really want to know is
                Are you gonna go my way?"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/haircut-7.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE WEEKND
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "I can't feel my face when I'm with you, but I love it"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/kawhi-leonard.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE KAWHI LEONARD
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "I'm a fun guy."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="./images/Mr-T.jpg"
              ></img>
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                THE MR. T
                </h2>
                {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1> */}
                <p class="leading-relaxed">
                "I pitty the fool"
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
