import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { services } from "../data/services";

const linkClass = ({ isActive }) =>
  `relative px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-300
  after:absolute after:bottom-1 after:left-4 after:h-[2px] after:bg-[#0086da]
  after:transition-all after:duration-300
  ${
    isActive
      ? "text-[#0086da] after:w-[calc(100%-32px)]"
      : "text-gray-700 after:w-0 hover:text-[#0086da] hover:after:w-[calc(100%-32px)]"
  }`;

const mobileLink = ({ isActive }) =>
  `flex items-center rounded-lg px-4 py-2.5 text-[15px] font-medium transition-colors duration-200
  ${
    isActive
      ? "bg-blue-50 text-[#0086da]"
      : "text-gray-700 hover:bg-gray-50 hover:text-[#0086da]"
  }`;

const subLink = ({ isActive }) =>
  `flex items-center rounded-md px-3 py-2 text-sm transition-colors duration-200
  ${
    isActive
      ? "bg-blue-50 font-semibold text-[#0086da]"
      : "text-gray-600 hover:bg-blue-50 hover:text-[#0086da]"
  }`;

const dropItem =
  "flex items-center justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0086da]";

const panel =
  "rounded-b-xl border border-t-2 border-gray-100 border-t-[#0086da] bg-white py-1.5 shadow-lg";

const chevronLeft = (
  <svg
    className="h-3.5 w-3.5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const chevronDown = (cls = "") => (
  <svg
    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${cls}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openChild, setOpenChild] = useState(null);
  const [hideMenu, setHideMenu] = useState(false); // closes the desktop dropdown after a click

  const { pathname } = useLocation();
  const servicesActive = pathname.startsWith("/services");

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
    setOpenChild(null);
  };

  const closeDesktop = () => setHideMenu(true);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Main Navbar */}
      <nav className="border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link to="/" onClick={close} className="group flex shrink-0 items-center">
            <img
              src="/logo-full.png"
              alt="Akshaya S D & Associates, Chartered Accountants"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            {/* Services Dropdown (hover only, not a link) */}
            <div
              className="group relative"
              onMouseLeave={() => setHideMenu(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                className={`flex cursor-default items-center gap-1.5 px-4 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  servicesActive
                    ? "text-[#0086da]"
                    : "text-gray-700 group-hover:text-[#0086da]"
                }`}
              >
                Services
                {chevronDown("group-hover:rotate-180")}
              </button>

              {/* First level */}
              <div
                className={`absolute left-0 top-full z-50 w-64 pt-1 transition-all duration-200 ${
                  hideMenu
                    ? "pointer-events-none invisible opacity-0"
                    : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                }`}
              >
                <div className={panel}>
                  {services.map((s) =>
                    s.children ? (
                      <div key={s.path} className="group/sub relative">
                        {/* GST Services: label only */}
                        <div
                          className={`${dropItem} cursor-default group-hover/sub:bg-blue-50 group-hover/sub:text-[#0086da]`}
                        >
                          {s.name}
                          {chevronLeft}
                        </div>

                        {/* Second level: opens to the LEFT so it never goes off-screen */}
                        <div className="invisible absolute -top-2 right-full z-[60] w-72 pr-1 opacity-0 transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                          <div className={panel}>
                            {s.children.map((c) => (
                              <Link
                                key={c.path}
                                to={c.path}
                                onClick={closeDesktop}
                                className={dropItem}
                              >
                                {c.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={closeDesktop}
                        className={dropItem}
                      >
                        {s.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className="ml-3 flex items-center gap-2 rounded-lg bg-[#0086da] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006eb5] hover:shadow-lg"
            >
              Contact Us
              <span>→</span>
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-colors hover:bg-blue-100 md:hidden"
          >
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-[#0086da] transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-[#0086da] transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-[#0086da] transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto border-b border-gray-100 bg-white px-4 pb-4 pt-2 shadow-xl">
            <div className="flex flex-col gap-1">
              <NavLink to="/" className={mobileLink} onClick={close}>
                Home
              </NavLink>

              {/* Mobile Services */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-[15px] font-medium transition-colors duration-200 ${
                  servicesOpen
                    ? "bg-blue-50 text-[#0086da]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Services
                {chevronDown(servicesOpen ? "rotate-180" : "")}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  servicesOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="ml-3 flex flex-col border-l-2 border-blue-100 pl-2">
                    {services.map((s) =>
                      s.children ? (
                        <div key={s.path}>
                          <button
                            onClick={() =>
                              setOpenChild(openChild === s.path ? null : s.path)
                            }
                            aria-expanded={openChild === s.path}
                            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 ${
                              openChild === s.path
                                ? "bg-blue-50 font-semibold text-[#0086da]"
                                : "text-gray-600 hover:bg-blue-50 hover:text-[#0086da]"
                            }`}
                          >
                            {s.name}
                            {chevronDown(openChild === s.path ? "rotate-180" : "")}
                          </button>

                          <div
                            className={`grid transition-all duration-300 ease-in-out ${
                              openChild === s.path
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <div className="ml-3 flex flex-col border-l border-blue-100 pl-2">
                                {s.children.map((c) => (
                                  <NavLink
                                    key={c.path}
                                    to={c.path}
                                    className={subLink}
                                    onClick={close}
                                  >
                                    {c.name}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <NavLink
                          key={s.path}
                          to={s.path}
                          className={subLink}
                          onClick={close}
                        >
                          {s.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              </div>

              <NavLink to="/about" className={mobileLink} onClick={close}>
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={close}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#0086da] px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#006eb5]"
              >
                Contact Us →
              </NavLink>
            </div>

            <p className="mt-4 text-center text-xs tracking-wide text-gray-400">
              Akshaya S D &amp; Associates · Chartered Accountants
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}