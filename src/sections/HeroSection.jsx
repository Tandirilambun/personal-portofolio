import { Fragment } from "react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="bg-gray-900 pt-40 lg:pt-10">
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-wrap min-h-screen">
          <div
            id="photo"
            className="my-5 self-center w-full lg:w-1/2 lg:hidden"
          >
            <img
              src="images/photo-3.jpg"
              alt="photo-1"
              className="rounded-full object-cover h-40 w-40 mx-auto border-red-300 "
              loading="lazy"
            />
          </div>
          <div className="lg:pr-10 w-full self-center lg:w-1/2">
            <div className="flex mb-7 items-center justify-center lg:justify-start">
              <h1 className="text-2xl font-poppins text-white underline underline-offset-8 decoration-[3px] decoration-red-700 lg:no-underline">
                Introduction
              </h1>
              
            </div>
            <h1 className="text-4xl lg:text-7xl font-courier font-medium text-white text-center lg:text-left">
              Tandirilambun
            </h1>
            <div className="red-line w-52 bg-red-700 h-1.5 ml-3 hidden lg:block "></div>
            <p className="font-light text-base lg:text-base font-poppins text-white lg:pr-48 text-center lg:text-left mt-7 mb-1">
              a fresh graduate that have interest in Web Development especially
              Front-End and REST API development
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="doc/Curriculum_Vitae_Tandirilambun.pdf"
                download="Tandirilambun_Curriculum_Vitae.pdf"
                className="text-base text-white rounded-xl font-medium mt-5 font-poppins hover:ease-in-out hover:duration-200 hover:scale-110 flex"
              >
                Curriculum Vitae
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="size-5 ms-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            id="photo"
            className="hidden lg:block my-5 self-center w-full lg:w-1/2 z-20"
          >
            <img
              src="images/photo-4.png"
              alt="photo-1"
              className="h-[30rem] lg:h-[45rem] max-w-full mx-auto "
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute top-24 left-[46%] w-full h-full z-10">
          <svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9EF0F0"
              d="M41.5,-76.2C50,-67.1,50.3,-48.1,50.6,-33.8C50.8,-19.5,51.1,-9.7,56.7,3.2C62.3,16.2,73.2,32.4,71.1,43.6C69,54.8,53.9,61,39.9,65.7C25.9,70.5,12.9,73.7,0.2,73.4C-12.6,73.1,-25.2,69.2,-33.8,61.4C-42.4,53.5,-47.1,41.7,-52.9,30.8C-58.8,19.9,-65.9,10,-68.8,-1.7C-71.7,-13.3,-70.3,-26.6,-62.5,-34.1C-54.8,-41.7,-40.5,-43.6,-29,-50.9C-17.5,-58.2,-8.8,-70.9,3.9,-77.6C16.6,-84.4,33.1,-85.2,41.5,-76.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
