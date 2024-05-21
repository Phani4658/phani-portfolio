import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="pl-10 lg:pl-0 flex justify-between items-center py-6 text-white">
      <div className="items-center flex flex-shrink-0">
        <h1 className="text-2xl font-bold">Phani</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/phani-cse/">
          <FaLinkedin />
        </a>
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
