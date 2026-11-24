import { Link } from "react-router-dom";

const phone = "";
const email = "";

const address =
  "1st Floor, Radder Complex, Beside Adishakti Temple, 3rd Cross Road, Vageesh Nagar, Ranebennur, Karnataka 581115";

const quickLinks = [
  { name: "Home", path: "/" },
  // { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Income Tax", path: "/services/income-tax" },
  // { name: "GST", path: "/services/gst" },
  { name: "Audit & Assurance", path: "/services/audit" },
  { name: "Accounting & Bookkeeping", path: "/services/accounting" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f2a44] text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Firm */}
        <div>
          <Link to="/" className="inline-block rounded-lg bg-white px-3 py-2">
            <img
              src="/logo-full.png"
              alt="Akshaya S D & Associates"
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-5 text-sm leading-7 text-gray-400">
            Chartered Accountants based in Ranebennur, Karnataka. Dependable
            taxation, accounting and compliance services.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="transition-colors duration-300 hover:text-[#4db3f5]"
                >
                  › {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h3>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.path}>
                <Link
                  to={s.path}
                  className="transition-colors duration-300 hover:text-[#4db3f5]"
                >
                  › {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">
            Contact Us
          </h3>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <ul className="mt-5 space-y-4 text-sm leading-6">
            <li className="flex gap-3">
              <span>📍</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "Radder Complex, Vageesh Nagar, Ranebennur 581115"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[#4db3f5]"
              >
                {address}
              </a>
            </li>
            {phone && (
              <li className="flex gap-3">
                <span>📞</span>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-[#4db3f5]"
                >
                  {phone}
                </a>
              </li>
            )}
            {email && (
              <li className="flex gap-3">
                <span>✉️</span>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors duration-300 hover:text-[#4db3f5]"
                >
                  {email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs leading-6 text-gray-400 md:px-8">
          <p>
            © {new Date().getFullYear()} Akshaya S D &amp; Associates, Chartered
            Accountants. All rights reserved.
          </p>
          <p className="mt-1">
            This website is for information only. It is not an advertisement or
            a solicitation of work.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;