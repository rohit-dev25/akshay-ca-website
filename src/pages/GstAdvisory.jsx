import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

const gst = services.find((s) => s.children);

const advisoryAreas = [
  "Whether GST applies to your business or activity, and whether you need to register",
  "Classification of goods and services, applicable tax rates and exemptions",
  "Input tax credit: eligibility, restrictions and how to claim it correctly",
  "Tax planning within the law, so that you do not pay more tax than needed",
  "Guidance for new businesses and online sellers",
  "The GST effect of a contract, price or transaction before it is finalised",
  "Reviewing agreements with customers and suppliers from a GST point of view",
  "The composition scheme and other options, where you are eligible",
  "GST position of businesses with more than one place of business or activity",
  "Limited reviews to find missed credit, wrong payments or exemptions not claimed",
];

const supportAreas = [
  "Clarifications on GST provisions and procedures",
  "Advice on the records and accounts to be maintained",
  "Advice on the eligibility of input tax credit",
  "Guidance on return filing and disclosures, and answers to queries while filing",
  "Regular updates on changes in the GST law",
  "Reviewing documents before they are submitted to the department",
  "Guidance on understanding notices and enquiries from the department",
];

const sideLink = ({ isActive }) =>
  `block py-1.5 text-sm transition-colors ${
    isActive ? "font-semibold text-[#0086da]" : "text-gray-600 hover:text-[#0086da]"
  }`;

function Heading({ children }) {
  return (
    <>
      <h2 className="mt-10 text-xl font-bold text-[#173653]">{children}</h2>
      <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
    </>
  );
}

export default function GstAdvisory() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            GST Advisory &amp; Consultancy
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            GST Services
            <span className="mx-1"> › </span>
            Advisory &amp; Consultancy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            GST questions come up often: whether to register, which rate applies,
            whether credit can be claimed, or how a new contract will be taxed.
            Clear advice before acting helps avoid mistakes that are costly to
            correct later.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice aims to give practical GST
            guidance in plain language, based on your business and the law in
            force.
          </p>

          <Heading>GST Advisory Services</Heading>
          <p className="mt-4">
            Advice on specific GST questions or decisions. Examples of the areas
            covered are:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {advisoryAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>GST Consultancy Support</Heading>
          <p className="mt-4">
            For businesses that want regular guidance, support can be provided
            on an ongoing basis. This can include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {supportAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            Advice depends on the facts you share and the law in force at the
            time. Please contact us to discuss your question.
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