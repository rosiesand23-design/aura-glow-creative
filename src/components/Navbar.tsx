import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dulce-hana-logo.png";
import CartDrawer from "@/components/CartDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border/50" role="banner">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dulce Hana"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#collections"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Collections
          </a>
          <a
            href="/#philosophy"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Philosophy
          </a>
          <a
            href="/#rituals"
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Rituals
          </a>
        </div>

        <div className="flex items-center gap-4">
          <CartDrawer />
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b border-border px-6 py-6 flex flex-col gap-4">
          <a
            href="/#collections"
            onClick={() => setIsOpen(false)}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Collections
          </a>
          <a
            href="/#philosophy"
            onClick={() => setIsOpen(false)}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Philosophy
          </a>
          <a
            href="/#rituals"
            onClick={() => setIsOpen(false)}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Rituals
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
