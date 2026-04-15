import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

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
            <div className="space-y-3 mb-6">
              <a href="mailto:dulcehana2@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                <Mail size={14} /> dulcehana2@gmail.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                <Phone size={14} /> +1 (800) 123-4567
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {[
            {
              title: "Shop",
              links: ["All Products", "Serums", "Moisturizers", "Cleansers"],
            },
            {
              title: "Support",
              links: ["Contact", "Shipping", "Returns", "FAQ"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-foreground mb-4 font-medium">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    {footerLinks[link] ? (
                      footerLinks[link].startsWith("mailto:") ? (
                        <a
                          href={footerLinks[link]}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                        >
                          {link}
                        </a>
                      ) : (
                        <Link
                          to={footerLinks[link]}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                        >
                          {link}
                        </Link>
                      )
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
