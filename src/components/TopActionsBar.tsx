import { useState } from "react";
import { Menu, X } from "lucide-react";
import CartDrawer from "@/components/CartDrawer";

const TopActionsBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-12 flex items-center justify-between">
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-top-menu"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <div className="ml-auto flex items-center">
          <CartDrawer />
        </div>
      </div>

      {isOpen && (
        <div id="mobile-top-menu" className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-3">
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
    </div>
  );
};

export default TopActionsBar;
