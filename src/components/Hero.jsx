const Hero = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center gap-5 lg:flex-row">
      <div className="w-full text-center ">
        <h1 className="text-5xl  font-bold mb-5 lg:mb-10 lg:text-8xl">
          Coding with 🔥 Passion <br /> Creating with Purpose
        </h1>
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-[#6a3093] via-slate-500 to-[#a044ff] bg-clip-text tracking-tight mb-3 text-transparent">
          I&apos;m Phani
        </h2>
        <p className="w-[90%] lg:w-[80%] mx-auto">
          Namaste! Welcome to my digital abode. I’m a passionate full stack
          developer with a knack for crafting robust, scalable web applications
          using the MERN stack – MongoDB, Express.js, React, and Node.js. With a
          blend of technical expertise and a deep appreciation for innovation, I
          transform ideas into interactive, user-friendly experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
