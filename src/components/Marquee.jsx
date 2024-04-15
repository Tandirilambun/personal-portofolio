const MarqueeText = () => {
  return (
    <section className="py-2">
      <div className="border-y-4 border-gray-900">
        <marquee behavior="loop" direction="left">
          <h1 className="font-poppins font-semibold text-[3rem] text-gray-900">Thank You!</h1>
        </marquee>
      </div>
    </section>
  );
};

export default MarqueeText;
