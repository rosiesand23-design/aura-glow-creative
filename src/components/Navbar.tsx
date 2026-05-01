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
            className="w-full h-auto block select-none"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex absolute inset-y-0 right-0 items-center gap-7 px-10 text-background"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
            <CartDrawer />
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden absolute inset-y-0 right-0 flex items-center px-5 text-background hover:text-accent transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile primary"
          className="md:hidden bg-black border-t border-background/10 px-6 py-5 flex flex-col items-end gap-4 text-background"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
            <CartDrawer />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
