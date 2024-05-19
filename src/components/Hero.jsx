const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <h1 className="text-5xl font-extralight mb-10 lg:text-6xl">Phani Peddapalem</h1>
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text tracking-tight mb-3 text-transparent">
          Full Stack Developer
        </h2>
        <p className="w-[90%] lg:w-[80%]">
          Namaste! Welcome to my digital abode. I’m a passionate full stack
          developer with a knack for crafting robust, scalable web applications
          using the MERN stack – MongoDB, Express.js, React, and Node.js. With a
          blend of technical expertise and a deep appreciation for innovation, I
          transform ideas into interactive, user-friendly experiences.
        </p>
      </div>
      <div className="w-full pr-10 md:pr-none lg:w-1/2 flex items-center justify-start lg:justify-center ">
        <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715942429/Portfolio/DSC00016_3_ipqyf9.jpg"
          className="lg:block w-[400px] lg:w-[500px] rounded-md"
          alt="phani peddapalem"
        />
        {/* <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715942818/Portfolio/DSC00014_1_f3yhyq.jpg"
          className="block w-full lg:hidden rounded-md"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
