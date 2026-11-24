import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

const gst = services.find((s) => s.children);

const returnSupport = [
  "Checking the returns to make sure sales, tax and credit are disclosed correctly",
  "Checking a sample of sales and purchase invoices",
  "Checking the computation of output tax on your supplies",
  "Checking eligibility of input tax credit, and credit that must be reversed",
  "Checking tax payable under reverse charge",
  "Checking interest on delayed payment of tax, or on non-payment to suppliers",
  "Checking that the conditions for exemptions and concessional rates are met",
  "Setting up your accounts so that the data needed for returns is ready every month",
  "Assisting with payment of tax after adjusting the credit available",
];

const sideLink = ({ isActive }) =>
  `block py-1.5 text-sm transition-colors ${
    isActive ? "font-semibold text-[#0086da]" : "text-gray-600 hover:text-[#0086da]"
  }`;

export default function GstCompliance() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            GST Compliance &amp; System Setting Support
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            GST Services
            <span className="mx-1"> › </span>
            Compliance &amp; System Setting Support
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            GST compliance is regular and mostly online. Returns, tax payment,
            notices and replies are all handled on the GST portal, and input
            tax credit depends on matching your records with the data on the
            portal. Small mistakes can lead to lost credit, interest or
            notices.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice aims to support businesses with
            their GST filings, and with setting up their records and software
            so that compliance becomes easier each month. Our services include
            the following.
          </p>

          <h2 className="mt-10 text-xl font-bold text-[#173653]">
            Obtaining Registration
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <p className="mt-4">
            The decision to register should be taken carefully, after looking at
            what the GST law requires and what benefits and exemptions apply to
            your business. The type of registration, the places of business and
            the details declared all need attention, because mistakes at this
            stage can cause problems later.
          </p>
          <p className="mt-4">
            We can help in obtaining registration, resolving issues that arise
            along the way, and cancelling or surrendering a registration that is
            no longer needed.
          </p>

          <h2 className="mt-10 text-xl font-bold text-[#173653]">
            GST Return Filing Support
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <p className="mt-4">
            Registered persons must file returns at regular intervals, and tax
            must be paid at the end of each tax period after adjusting the input
            tax credit they are eligible to use. Credit has to be matched
            between your books and the GST portal, and tax under reverse charge
            has to be paid as well. Handling all of this can be technical and
            time consuming.
          </p>
          <p className="mt-4">Our support in return filing and tax payment includes:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {returnSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-bold text-[#173653]">
            Internal Controls &amp; System Setting
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <p className="mt-4">
            GST affects almost every transaction in a business, and most
            businesses now record their transactions in accounting software.
            Correct settings in the software, such as tax rates, HSN/SAC codes,
            party details and invoice formats, help avoid errors at the source.
          </p>
          <p className="mt-4">
            We help set up controls and systems so that GST requirements are
            met in day-to-day work, and not only at the time of filing.
          </p>

          <h2 className="mt-10 text-xl font-bold text-[#173653]">
            Standard Operating Procedures
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <p className="mt-4">
            A business should not depend on one person for its GST work. Written,
            step-by-step procedures help new staff take over, reduce mistakes
            and keep compliance consistent.
          </p>
          <p className="mt-4">
            We help prepare such procedures for GST tasks such as invoicing,
            credit checks and return filing.
          </p>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            Filing requirements and due dates depend on your type of
            registration and the law in force. Please contact us to check what
            applies to your business.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-[#0086da] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#006eb5]"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Side list */}
        <aside>
          <h3 className="text-lg font-bold text-[#173653]">{gst.name}</h3>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <ul className="mt-4">
            {gst.children.map((c) => (
              <li key={c.path}>
                <NavLink to={c.path} className={sideLink}>
                  › {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}