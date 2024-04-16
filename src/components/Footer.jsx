const Footer = () => {
  return (
    <section id="footer-section" className="pt-32 pb-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="px-10 flex flex-wrap">
          <div className="mb-20 lg:mb-0 lg:w-1/3 lg:mr-60 self-center w-full">
            <div>
              <h1 className="mb-3 text-5xl lg:text-5xl font-poppins font-bold text-white">
                Contact
              </h1>
              <h1 className="lg:pr-32 text-xl lg:text-xl font-poppins font-bold text-white">
                Keep in touch with <span className="text-cyan-400">me </span>in my social platform
              </h1>
            </div>
          </div>
          <div className="lg:w-1/4">
            <h2 className="mb-8 text-4xl lg:text-4xl text-ce font-poppins font-bold text-white">
              Social
            </h2>
            <div>
              <div className="flex items-center mb-3 px-5 py-2 mr-5 hover:bg-cyan-400 hover:ease-in-out hover:duration-200">
                <div className="border rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="23"
                    height="23"
                    className="fill-white"
                  >
                    <title>email-outline</title>
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                </div>
                <h2 className="font-poppins text-white mx-3 font-medium">
                  tandirilmbn@gmail.com
                </h2>
              </div>
              <div className="mb-3 px-5 py-2 mr-5 hover:bg-cyan-400 hover:ease-in-out hover:duration-200">
                <a href="https://www.instagram.com/tandirii/" className="flex items-center" target="blank">
                  <img
                    src="icon/instagram-logo.png"
                    alt=""
                    className="h-8 border p-1 rounded-full"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Instagram
                  </p>
                </a>
              </div>
              <div className="mb-3 px-5 py-2 mr-5 hover:bg-cyan-400 hover:ease-in-out hover:duration-200">
                <a href="https://www.linkedin.com/in/tandirilambun-tandirilambun/" className="flex items-center" target="blank">
                  <img
                    src="icon/linkedin-logo.png"
                    alt=""
                    className="h-8 border p-1 rounded-full"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Linked In
                  </p>
                </a>
              </div>
              <div className="mb-3 px-5 py-2 mr-5 hover:bg-cyan-400 hover:ease-in-out hover:duration-200">
                <a href="https://www.facebook.com/tndirilmbn/" className="flex items-center" target="blank">
                  <img
                    src="icon/facebook-logo-2.png"
                    alt=""
                    className="h-8 border p-1 rounded-full"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Facebook
                  </p>
                </a>
              </div>
              <div className="mb-3 px-5 py-2 mr-5 hover:bg-cyan-400 hover:ease-in-out hover:duration-200">
                <a href="https://github.com/Tandirilambun" className="flex items-center">
                  <img
                    src="icon/github-icon.png"
                    alt=""
                    className="h-8 border p-1 rounded-full"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Github
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5">
            <h2 className="mb-8 text-4xl lg:text-4xl font-poppins font-bold text-white">
              Navigation
            </h2>
            <div>
              <a
                href="#hero-section"
                className="mb-5 py-3 px-3 mr-5 flex font-poppins text-lg text-white mx-3 font-medium hover:bg-cyan-400 hover:ease-in-out hover:duration-200"
              >
                Home
              </a>
              <a
                href="#about-section"
                className=" mb-5 py-3 px-3 mr-5 flex font-poppins text-lg text-white mx-3 font-medium hover:bg-cyan-400 hover:ease-in-out hover:duration-200"
              >
                About
              </a>
              <a
                href="#skill-section"
                className="mb-5 py-3 px-3 mr-5 flex font-poppins text-lg text-white mx-3 font-medium hover:bg-cyan-400 hover:ease-in-out hover:duration-200"
              >
                Tech
              </a>
              <a
                href="#project-section"
                className="mb-5 py-3 px-3 mr-5 flex font-poppins text-lg text-white mx-3 font-medium hover:bg-cyan-400 hover:ease-in-out hover:duration-200"
              >
                Project
              </a>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-white text-center font-poppins mt-2">
          Copyright &copy; 2024. Made by Tandirilambun with <span className="text-[#88dded]">ReactJS</span> and <span className="text-[#3490dc]">Tailwind CSS</span>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
