import React from "react";
import GalleryCard from "./GalleryCard";

function Gallery() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            View Our Work
          </h1>
        </div>
      </div>

      <div>
        <GalleryCard/>
      </div>
 
    </section>
  );
}

export default Gallery;
