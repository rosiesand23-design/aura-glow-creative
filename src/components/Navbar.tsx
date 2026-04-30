import { Link } from "react-router-dom";
import headerBanner from "@/assets/header-banner-dulcehana.webp";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black" role="banner">
      <Link to="/" aria-label="Dulce Hana home" className="block">
        <img
          src={headerBanner}
          alt="Dulce Hana"
          className="w-full h-auto block select-none"
        />
      </Link>
    </header>
  );
};

export default Navbar;
