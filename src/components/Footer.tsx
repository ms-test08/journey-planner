import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-auto">
    <div className="section-container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Plane className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">TravelHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Discover the world with curated travel experiences.
          </p>
        </div>
        {[
          { title: "Company", links: ["About", "Careers", "Press"] },
          { title: "Support", links: ["Help Center", "Contact", "FAQ"] },
          { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-3 text-foreground">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 TravelHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
