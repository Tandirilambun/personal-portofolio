const EducationSection = () => {
  return (
    <section id="education-section" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-poppins text-black text-center font-semibold mb-20">
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
              <h1 className="text-center font-poppins text-black mb-3 text-3xl font-bold ">
                Duta Wacana Christian University
              </h1>

              <h2 className="text-center font-poppins text-black mb-3 font-light">
                Bachelor Informatics <br />
                Informatics Engineering from Information and Technology Faculty
              </h2>
              <h5 className="text-center font-poppins text-black mb-3 font-medium text-lg">
                Aug 2019 - Dec 2023
              </h5>
              <h5 className="text-center font-poppins text-black font-medium text-lg">
                GPA 3.58 / 4.00
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
