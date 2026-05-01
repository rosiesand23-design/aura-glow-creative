import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import headerBanner from "@/assets/header-banner-dulcehana.webp";
import CartDrawer from "@/components/CartDrawer";

const navLinks = [
  { href: "/#collections", label: "Explore Collection" },
  { href: "/#ingredients", label: "Philosophy" },
  { href: "/#rituals", label: "Our Rituals" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black" role="banner">
      <div className="relative">
        <Link to="/" aria-label="Dulce Hana home" className="block">
          <img
            src={headerBanner}
            alt="Dulce Hana"
            className="w-full h-auto block select-none scale-110 origin-center py-2"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex absolute inset-y-0 right-0 items-center gap-7 px-10 text-background"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
            <CartDrawer />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden absolute inset-y-0 right-0 flex items-center gap-3 px-4 text-background">
          <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-5 [&_svg]:!w-5">
            <CartDrawer />
          </div>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
            className="text-background hover:text-accent transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-nav"
        aria-label="Mobile primary"
        className={`md:hidden overflow-hidden bg-black border-t border-background/10 transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
