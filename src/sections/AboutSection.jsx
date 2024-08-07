const AboutSection = () => {
  return (
    <section id="about-section" className="lg:min-h-screen bg-gray-50 py-40">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div
            id="photo"
            className="hidden w-full lg:w-1/2 lg:block"
          >
            <img
              src="images/photo-2.jpg"
              alt="photo-1"
              className="h-[40rem] max-w-full mx-auto rounded-tr-[14rem] border-8 rounded-bl-[14rem] border-zinc-700"
              loading="lazy"
            />
          </div>
          <div className="lg:px-10 w-full h-fit lg:w-1/2">
            <div className="flex flex-wrap mb-4">
              <div
                id="photo"
                className="mr-2 sm:w-fit md:w-fit lg:hidden sm:mx-auto md:mx-auto"
              >
                <img
                  src="images/photo-2.jpg"
                  alt="photo-1"
                  className="h-[6rem] max-w-full rounded-t-full  rounded-bl-full border-zinc-700"
                  loading="lazy"
                />
              </div>
              <div className="w-1/2 sm:w-5/6 lg:w-full self-end">
                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-poppins lg:w-full">
                  About me, <span className="text-red-600">Tandiri</span>
                </h1>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-poppins font-semibold mb-5 lg:w-full">
              A short story about <span className="text-red-600"> me </span>
            </h1>
            <p className="text-justify lg:text-left font-normal font-poppins text-sm lg:text-base lg:pr-10 text-zinc-700">
              Hello! My name is Tandirilambun, I'm usually called as{" "}
              <b className="text-red-600">Tandiri/Ten</b>, and I come from Indonesia. Now im seeking for
              employment opportunities. I have strongly interested in web and
              mobile development especially for Front-End developer and API
              development.
              <br />
              <br />
              I graduate from <b>Duta Wacana Christian University</b> with majoring in
              Informatics Engineering. Trough the Merdeka Belajar Kampus
              Merdeka, I was fortunate to secure intern at SATUNAMA Yogyakarta
              Foundation as a Software Developer. My internship provided me
              with invaluable exposure to the software development lifecycle
              process.
              <br />
              <br />I have the ambition to develop my skills and grow
              professionally to contribute positively to the work environment,
              therefore I always do my best in every task I take.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
