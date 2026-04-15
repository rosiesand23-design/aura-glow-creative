import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

const footerLinks: Record<string, string> = {
  "All Products": "/shop/all",
  "Serums": "/shop/serums",
  "Moisturizers": "/shop/moisturizers",
  "Cleansers": "/shop/cleanser",
  "Contact": "mailto:dulcehana2@gmail.com",
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-foreground mb-4">Dulce Hana</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
              Botanical luxury skincare, crafted with intention and rooted in nature.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-medium">
              Shop
            </h4>
            <ul className="space-y-3">
              {["All Products", "Serums", "Moisturizers", "Cleansers"].map((link) => (
                <li key={link}>
                  <Link
                    to={footerLinks[link]}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-medium">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Shipping", href: "https://hbk21r-71.myshopify.com/policies/shipping-policy", note: "Calculated at checkout" },
                { label: "Returns", href: "https://hbk21r-71.myshopify.com/policies/refund-policy" },
                { label: "FAQ", href: "https://hbk21r-71.myshopify.com/policies/terms-of-service" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-medium">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:dulcehana2@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                  <Mail size={14} /> dulcehana2@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/dulcehanabeauty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                  <Instagram size={14} /> @dulcehanabeauty
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2026 Dulce Hana. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground tracking-wider transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
