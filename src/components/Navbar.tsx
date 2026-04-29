import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black" role="banner">
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center">
          <h1 className="text-white tracking-[0.3em] uppercase font-semibold text-sm md:text-base">
            Dulce Hana
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
