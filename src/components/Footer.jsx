const Footer = () => {
  return (
    <section id="footer-section" className="pt-32 pb-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex gap-x-20 mb-20">
          <div className="mb-20 lg:mb-0 self-center w-fit">
            <div>
              <h1 className="text-center lg:text-left mb-3 text-5xl lg:text-5xl font-poppins font-bold text-white">
                Contact
              </h1>
              <h1 className="text-center lg:text-left text-xl lg:text-xl font-poppins font-bold text-white">
                Keep in touch with <span className="text-cyan-400">me </span>in my social platform
              </h1>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
              <div className="flex items-center group">
                <div className="border rounded-full p-1 group-hover:bg-red-800 group-hover:ease-in-out group-hover:duration-200 group-hover:border-gray-900">
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
              <div className="group">
                <a href="https://www.instagram.com/tandirii/" className="flex items-center" target="blank">
                  <img
                    src="icon/instagram-logo.png"
                    alt=""
                    className="h-8 border p-1 rounded-full group-hover:bg-red-800 group-hover:ease-in-out group-hover:duration-200 group-hover:border-gray-900"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Instagram
                  </p>
                </a>
              </div>
              <div className="group">
                <a href="https://www.linkedin.com/in/tandirilambun-tandirilambun-4a0631318/" className="flex items-center" target="blank">
                  <img
                    src="icon/linkedin-logo.png"
                    alt=""
                    className="h-8 border p-1 rounded-full group-hover:bg-red-800 group-hover:ease-in-out group-hover:duration-200 group-hover:border-gray-900"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Linked In
                  </p>
                </a>
              </div>
              <div className="group">
                <a href="https://www.facebook.com/tndirilmbn/" className="flex items-center" target="blank">
                  <img
                    src="icon/facebook-logo-2.png"
                    alt=""
                    className="h-8 border p-1 rounded-full group-hover:bg-red-800 group-hover:ease-in-out group-hover:duration-200 group-hover:border-gray-900"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Facebook
                  </p>
                </a>
              </div>
              <div className="group">
                <a href="https://github.com/Tandirilambun" className="flex items-center" target="blank">
                  <img
                    src="icon/github-icon.png"
                    alt=""
                    className="h-8 border p-1 rounded-full group-hover:bg-red-800 group-hover:ease-in-out group-hover:duration-200 group-hover:border-gray-900"
                  />
                  <p className="font-poppins text-white mx-3 font-medium">
                    Github
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-white text-center font-poppins mt-2 ">
          Copyright &copy; 2024. Made by Tandirilambun with <span className="text-[#88dded]">ReactJS</span> and <span className="text-[#3490dc]">Tailwind CSS</span>
        </h1>
      </div>
    </section>
  );
};

export default Footer;
