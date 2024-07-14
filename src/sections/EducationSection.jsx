const EducationSection = () => {
  return (
    <section id="education-section" className="bg-gray-900 py-40 text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl lg:text-7xl font-poppins text-center font-semibold mb-20">
          Education
        </h1>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center mb-10">
              <img
                className="h-44 lg:h-60 "
                src="images/logo-UKDW.png"
                alt="logo ukdw"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-2xl text-center font-poppins mb-3 lg:text-3xl font-bold ">
                Duta Wacana Christian University
              </h1>

              <h2 className="text-center font-poppins mb-3 font-light">
                Bachelor Informatics <br />
                Informatics Engineering from Information and Technology Faculty
              </h2>
              <h5 className="text-center font-poppins mb-3 font-medium text-lg">
                Aug 2019 - Dec 2023
              </h5>
              <h5 className="text-center font-poppins font-medium text-lg">
                GPA 3.48 / 4.00
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
