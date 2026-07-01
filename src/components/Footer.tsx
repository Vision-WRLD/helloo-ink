import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading tracking-wider text-vw-white">
                VISION
              </span>
              <span className="text-2xl font-heading tracking-wider text-vw-gold">
                WRLD
              </span>
            </Link>
            <p className="text-vw-gray text-sm leading-relaxed">
              Newmarket&apos;s premier destination for custom tattooing. Where your
              vision meets our world.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/visionwrld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vw-gray hover:text-vw-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-vw-white mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/artists", label: "Artists & Portfolio" },
                { href: "/booking", label: "Book a Consultation" },
                { href: "/aftercare", label: "Aftercare Guide" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-vw-gray text-sm hover:text-vw-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-vw-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-vw-gray text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-vw-accent" />
                <span>175 Main St S, Newmarket, ON L3Y 3Y7</span>
              </li>
              <li className="flex items-start gap-3 text-vw-gray text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-vw-accent" />
                <a href="tel:+19055551234" className="hover:text-vw-gold transition-colors">
                  (905) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3 text-vw-gray text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-vw-accent" />
                <a href="mailto:info@visionwrld.com" className="hover:text-vw-gold transition-colors">
                  info@visionwrld.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-vw-white mb-4">
              Studio Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { day: "Tuesday – Friday", time: "11am – 7pm" },
                { day: "Saturday", time: "10am – 6pm" },
                { day: "Sunday – Monday", time: "Closed" },
              ].map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="text-vw-gray">{h.day}</span>
                  <span className={h.time === "Closed" ? "text-vw-gray-dark" : "text-vw-gold"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              className="btn-primary text-xs py-2 px-4 mt-6 w-full justify-center"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-vw-gray-dark text-xs">
            © {new Date().getFullYear()} Vision Wrld Tattoo Studio. All rights
            reserved.
          </p>
          <p className="text-vw-gray-dark text-xs">
            Custom tattoo art in Newmarket, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
}
