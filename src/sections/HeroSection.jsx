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
              <div className="red-line w-14 bg-red-700 h-1.5 ml-3 hidden lg:block "></div>
            </div>
            <h1 className="text-4xl lg:text-7xl font-poppins font-medium text-white mb-3 text-center lg:text-left">
              Tandirilambun
            </h1>
            <p className="font-light text-base lg:text-base font-poppins text-white lg:pr-48 text-center lg:text-left mb-3">
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
            className="hidden lg:block my-5 self-center w-full lg:w-1/2 "
          >
            <img
              src="images/photo-3.jpg"
              alt="photo-1"
              className="border-4 h-[30rem] lg:h-[40rem] max-w-full mx-auto lg:rounded-tl-[14rem] lg:border-8 lg:rounded-br-[14rem] border-red-800 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
