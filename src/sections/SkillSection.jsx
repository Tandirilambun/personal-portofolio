const SkillSection = () => {
  return (
    <section id="skill-section" className="py-40 bg-white ">
      <div className="container mx-auto">
        <div className="px-10 lg:flex lg:gap-x-48">
          <div className="mb-10 lg:mb-0 lg:w-1/4 self-center">
            <h1 className="text-5xl text-center lg:text-left lg:text-5xl font-poppins font-bold text-black">
              Some of the <span className="text-red-600">Technology</span> that I use.
            </h1>
          </div>
          <div className="lg:w-3/4 flex flex-wrap gap-x-10 gap-y-10">
                <img src="icon/html-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/css-logo-2.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/javascript-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/java-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/python-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/php-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/laravel-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/bootstrap-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/tailwind-logo-2.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/node-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/vue-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/react-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/express-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/posgresql-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/mysql-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/firebase-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/postman-logo-2.png" alt="html-logo" className="h-16" loading="lazy"/>
                <img src="icon/figma-logo.png" alt="html-logo" className="h-16" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
