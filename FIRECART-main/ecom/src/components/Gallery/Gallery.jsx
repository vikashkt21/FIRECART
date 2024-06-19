import React from "react";
import g1 from "../../assets/GalleryImg/g1.jpg";
import g2 from "../../assets/GalleryImg/g2.jpg";
import g3 from "../../assets/GalleryImg/g3.jpg";
import g4 from "../../assets/GalleryImg/g4.jpg";
import g5 from "../../assets/GalleryImg/g5.jpg";
import g6 from "../../assets/GalleryImg/g6.jpg";
import {motion} from "framer-motion"

const Gallery = () => {
  return (
    <>
      <div className=" mt-12 text-center ">
        <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
         className=" text-4xl md:text-5xl font-semibold underline">
          Gallery
        </motion.h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1  ">
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transtion duration-500">
              <div className="md:p-2 p-1 w-1/2 ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src={g1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={g3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transtion duration-500">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={g4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={g6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
