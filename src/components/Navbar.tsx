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
        className="flex items-center justify-center gap-6 md:gap-10 px-6 py-3 bg-black text-background"
      >
        <a
          href="/#collections"
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Explore Collection
        </a>
        <a
          href="/#ingredients"
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Philosophy
        </a>
        <a
          href="/#rituals"
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Our Rituals
        </a>
        <div className="text-background [&_button]:text-background [&_button:hover]:text-accent">
          <CartDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
