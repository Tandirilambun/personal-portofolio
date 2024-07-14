import { useEffect, useState } from "react";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.add("hamburger-active");
      navMenu.classList.remove("hidden");
    });

    window.addEventListener("click", function (e) {
      if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });
  },[]);
  return (
    <header className="fixed top-0 left-0 w-full flex items-center bg-gray-900/60 backdrop-blur-sm z-[999]">
      <div className="container mx-auto px-4 text-white py-4 lg:py-0">
        <div className="relative flex items-center justify-between">
          <div>
            <img src="icon/portofolio-logo-light.png" alt="" className="h-7 " />
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
            >
              <span className="my-1 block h-[3px] w-[25px] bg-white  origin-top-left"></span>
              <span className="my-1 block h-[3px] w-[25px] bg-white "></span>
              <span className="my-1 block h-[3px] w-[25px] bg-white  origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#hero-section"
                    className="text-base font-semibold font-poppins text-teal-500 py-2 mx-8 flex group-hover:text-red-400"
                  >
                    Hero
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about-section"
                    className="text-base font-semibold font-poppins text-teal-500 py-2 mx-8 flex group-hover:text-red-400"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#skill-section"
                    className="text-base font-semibold font-poppins text-teal-500 py-2 mx-8 flex group-hover:text-red-400"
                  >
                    Tech
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#project-section"
                    className="text-base font-semibold font-poppins text-teal-500 py-2 mx-8 flex group-hover:text-red-400"
                  >
                    Project
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#footer-section"
                    className="text-base font-semibold font-poppins text-teal-500 py-2 mx-8 flex group-hover:text-red-400"
                  >
                    Contact
                  </a>
                </li>
                <hr />
                <li className="mt-5 lg:hidden">
                  <div className="flex justify-center gap-x-4">
                    <a href="https://www.instagram.com/tandirii/" className="bg-black rounded-xl">
                      <img
                        src="icon/instagram-logo.png"
                        alt=""
                        className="h-6 m-1"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/tandirilambun-tandirilambun-4a0631318/" className="bg-black rounded-md">
                      <img
                        src="icon/linkedin-logo.png"
                        alt=""
                        className="h-6 m-1"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-3">
            <a href="https://www.instagram.com/tandirii/" className="hover:scale-125 hover:duration-300 ease-in-out scale-100 duration-300 rounded-xl">
              <img src="icon/instagram-logo.png" alt="" className="h-6 m-1" />
            </a>
            <a href="https://www.linkedin.com/in/tandirilambun-tandirilambun-4a0631318/" className="hover:scale-125 hover:duration-300 ease-in-out scale-100 duration-300 rounded-md">
              <img src="icon/linkedin-logo.png" alt="" className="h-6 m-1" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
