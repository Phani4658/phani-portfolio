import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import Navbar from "./components/Navbar";
import Skillset from "./components/Skillset";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative h-full min-h-screen w-full bg-slate-950">
        <section className="container min-h-screen flex flex-col mx-auto md:px-none">
          <Navbar />
          <Hero />
        </section>
        <ImageCarousel />
        <section className="container mx-auto pl-10 md:px-none">
          <Skillset />
        </section>
      </div>
    </div>
  );
};

export default App;
