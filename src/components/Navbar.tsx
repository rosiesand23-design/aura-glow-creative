import { Link } from "react-router-dom";
import headerBanner from "@/assets/header-banner-dulcehana.webp";
import CartDrawer from "@/components/CartDrawer";

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
      <nav
        aria-label="Primary"
        className="flex items-center justify-center gap-4 md:gap-6 px-6 py-1.5 bg-black text-background"
      >
        <a
          href="/#collections"
          className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Explore Collection
        </a>
        <a
          href="/#ingredients"
          className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Philosophy
        </a>
        <a
          href="/#rituals"
          className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Our Rituals
        </a>
        <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-5 [&_svg]:!w-5">
          <CartDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
