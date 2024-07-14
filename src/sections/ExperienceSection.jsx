const ExperienceSection = () => {
  return (
    <section id="experience-section" className="bg-gray-50 py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full lg:px-10 lg:w-full self-center mb-20">
            <h1 className="text-center lg:text-left text-5xl font-poppins font-bold  text-black lg:w-full mb-20">
              Experience
            </h1>
            <div className="px-5 py-5 rounded-2xl bg-white shadow-lg">
              <div className="h-full">
                <h1 className="text-2xl font-bold font-poppins mb-2">
                  Sep - Dec 2022
                </h1>
                <h1 className="font-poppins mb-2 font-semibold">
                  Internship Software Developer
                </h1>
                <p className="font-poppins mb-2 font-light">
                  SATUNAMA Yogyakarta Foundation
                </p>
                <p className="font-poppins mb-2 font-medium">
                  DI Yogyakarta, Indonesia
                </p>
                <p className="font-poppins mb-2 font-light text-sm pr-">
                  &bull; Develop a system for managing organization's strategic
                  planning use Laravel Framework.
                  <br />
                  &bull; Develop the database system using PostgreSQL
                  <br />
                  &bull; Tested the system to ensure the functionality is worked
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:px-10 lg:w-full self-center h-full">
            <h1 className="text-wrap text-center lg:text-left text-4xl font-poppins font-bold text-black lg:w-full mb-10">
              Certification
            </h1>
            <a
              className="group"
              href="https://www.credly.com/badges/42fc2149-b2ee-4e16-9cec-89a19ed0c54b/public_url"
              target="blank"
            >
              <div className="px-5 py-5 rounded-2xl bg-white shadow-lg">
                <div className="flex">
                  <div className="hidden w-fit self-center mx-auto sm:block md:block lg:block">
                    <svg
                      width="100"
                      height="100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="group-hover:ease-in-out group-hover:duration-200 group-hover:scale-[1.15]"
                    >
                      <title>arrow-top-right-thick</title>
                      <path
                        className="group-hover:fill-red-700 "
                        d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-2xl font-bold font-poppins mb-2">
                      Oct 2022
                    </h1>
                    <h2 className="font-poppins mb-2 font-semibold">
                      Information Technology Specialist
                    </h2>
                    <h3 className="font-poppins mb-2 font-medium">
                      Certiport - A Pearson VUE Business
                    </h3>
                    <h4 className="font-poppins mb-2 font-light text-sm">
                      HTML & CSS
                    </h4>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
