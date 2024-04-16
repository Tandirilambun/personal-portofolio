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
              src="images/photo-1.jpg"
              alt="photo-1"
              className="rounded-full object-cover h-40 w-40 mx-auto border-gray-300 "
              loading="lazy"
            />
          </div>
          <div className="lg:pr-10 w-full self-center lg:w-1/2">
            <div className="flex mb-7 items-center justify-center lg:justify-start">
              <h1 className="text-2xl font-poppins text-white underline underline-offset-8 decoration-[3px] decoration-red-700 lg:no-underline">
                Introduction
              </h1>
              <div className="w-14 bg-red-700 h-1.5 ml-3 hidden lg:block "></div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-poppins font-medium text-white mb-10 text-center lg:text-left">
              Tandirilambun
            </h1>
            <p className="font-medium text-base lg:text-lg font-poppins text-white lg:pr-48 text-center lg:text-left">
              a fresh graduate that have interest in Web Development especially
              Front-End and REST API development
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[url('/icon/oval.png')] text-base bg-cover bg-no-repeat text-white bg-center px-9 py-3 rounded-xl font-bold mt-5 font-poppins hover:ease-in-out hover:duration-200 hover:scale-110">
                Connect with me
              </button>
            </div>
          </div>
          <div
            id="photo"
            className="hidden lg:block my-5 self-center w-full lg:w-1/2 "
          >
            <img
              src="images/photo-1.jpg"
              alt="photo-1"
              className="border-4 h-[30rem] lg:h-[40rem] max-w-full mx-auto lg:rounded-tl-[14rem] lg:border-8 lg:rounded-br-[14rem] border-gray-300 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
