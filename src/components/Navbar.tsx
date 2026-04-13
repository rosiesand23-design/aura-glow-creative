import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dulce-hana-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Dulce Hana" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {["Collections", "Ingredients", "Rituals", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#collections" className="btn-elegant-outline text-xs py-2 px-6">
              Shop Now
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 animate-fade-in">
          <div className="flex flex-col gap-6">
            {["Collections", "Ingredients", "Rituals", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                {item}
              </a>
            ))}
            <a href="#collections" className="btn-elegant text-xs py-2 px-6 text-center mt-4">
              Shop Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
