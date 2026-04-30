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
        className="flex items-center justify-end gap-5 md:gap-7 px-6 md:px-10 py-2 bg-black text-background"
      >
        <a
          href="/#collections"
          className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Explore Collection
        </a>
        <a
          href="/#ingredients"
          className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Philosophy
        </a>
        <a
          href="/#rituals"
          className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
        >
          Our Rituals
        </a>
        <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
          <CartDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
