import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center gap-5 lg:flex-row">
      <div className="w-full text-center p-5 flex flex-col gap-3 lg:gap-8 md:p-0">
        <h1 className="text-2xl md:text-5xl  font-bold lg:text-6xl xl:text-8xl">
          Coding with 🔥 Passion <br /> Creating with Purpose
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-[#FC6400] to-[#fac000] bg-clip-text tracking-tight text-transparent">
          I&apos;m Phani
        </h2>
        <p className="w-[90%] lg:w-[80%] mx-auto">
          Namaste! Welcome to my digital abode. I’m a passionate full stack
          developer with a knack for crafting robust, scalable web applications
          using the MERN stack – MongoDB, Express.js, React, and Node.js. With a
          blend of technical expertise and a deep appreciation for innovation, I
          transform ideas into interactive, user-friendly experiences.
        </p>
        <Link to="https://www.linkedin.com/in/phani-cse/" target="_blank">
          <button className="bg-white w-content mx-auto  text-black py-2 px-4 rounded-full shadow-lg">
            Connect with me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
