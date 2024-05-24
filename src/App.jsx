import Experience from "./components/Experience";
import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skillset from "./components/Skillset";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative h-full w-full bg-slate-950">
        <section className="container h-screen md:h-[60vh] lg:h-screen flex flex-col mx-auto md:px-none">
          <Navbar />
          <Hero />
        </section>
        <ImageCarousel />
        <section className="container mx-auto lg:pl-10 md:px-none">
          <Skillset />
          <Services />
          <Experience />
        </section>
      </div>
    </div>
  );
};

export default App;
