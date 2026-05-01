import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import headerBanner from "@/assets/header-banner-dulcehana.webp";
import CartDrawer from "@/components/CartDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#collections", label: "Explore Collection" },
    { href: "/#ingredients", label: "Philosophy" },
    { href: "/#rituals", label: "Our Rituals" },
  ];

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
          className="hidden md:flex absolute inset-y-0 right-0 items-center gap-5 md:gap-7 px-6 md:px-10 text-background"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
            <CartDrawer />
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden absolute inset-y-0 right-0 flex items-center px-4 text-background hover:text-accent transition-colors"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          aria-label="Mobile primary"
          className="md:hidden bg-black border-t border-background/10 px-6 py-4 flex flex-col gap-4 text-background"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.25em] uppercase text-background/90 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-1 text-background [&_button]:text-background [&_button:hover]:text-accent [&_svg]:!h-6 [&_svg]:!w-6">
            <CartDrawer />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
