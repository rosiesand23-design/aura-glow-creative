import { Link } from "react-router-dom";
import logo from "@/assets/dulce-hana-logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border/50" role="banner">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-center" aria-label="Primary">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dulce Hana"
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
