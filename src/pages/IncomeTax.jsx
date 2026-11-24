import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

// Side list: services that have their own page (GST pages are reached from the menu)
const otherServices = services.filter((s) => !s.children);

const whoNeeds = [
  "Salaried individuals with other income, such as interest, rent or capital gains",
  "Professionals and self-employed persons",
  "Traders and businesses of all sizes",
  "Senior citizens and pensioners",
  "Anyone who has received an income tax notice",
];

const steps = [
  "Understanding requirements: we learn about your sources of income and what you need.",
  "Collecting documents: we list the documents needed, such as income statements, bank records and investment proofs.",
  "Computation and preparation: we calculate the tax and prepare the return in the prescribed format.",
  "Filing and verification: we file the return on the income tax portal and help you complete its verification.",
  "Follow-up: we help with refund status, notices or any later correction.",
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

export default function IncomeTax() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Income Tax</h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            Income Tax
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            Income tax compliance means understanding the provisions that apply
            to you, keeping the right records and filing on time. Income tax is
            now governed by the Income-tax Act, 2025, which has applied since
            1 April 2026.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice aims to provide professional
            assistance in income tax and related compliance for individuals and
            businesses. The services offered are as follows.
          </p>

          <Heading>Return Preparation &amp; Filing</Heading>
          <p className="mt-4">
            Reviewing income details, deductions and tax calculations, then
            preparing and filing the income tax return and completing its
            verification.
          </p>

          <Heading>Tax Planning &amp; Advisory</Heading>
          <p className="mt-4">
            Guidance on applicable tax provisions, eligible deductions and
            exemptions, so that decisions are taken with the tax effect in mind.
          </p>

          <Heading>TDS &amp; TCS Compliance</Heading>
          <p className="mt-4">
            Assistance with deduction and collection of tax at source, payment
            of tax, statement filing and related compliance.
          </p>

          <Heading>Tax Audit Reporting</Heading>
          <p className="mt-4">
            Assistance with tax audit and related reporting where it applies,
            under Section 63 of the Income-tax Act, 2025 (earlier Section 44AB).
          </p>

          <Heading>Notice Assistance</Heading>
          <p className="mt-4">
            Understanding income tax notices and outstanding demands, and
            preparing suitable responses within the time allowed.
          </p>

          <Heading>Refunds &amp; Rectification</Heading>
          <p className="mt-4">
            Assistance with refund issues, tax credit mismatches and
            rectification requests where they are permitted.
          </p>

          <Heading>Who May Need Our Help?</Heading>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {whoNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>How We Work</Heading>
          <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#0086da]">
            {steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            Tax rules, rates and due dates can change. Please contact us to check
            what applies to you for the current year.
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
          <h3 className="text-lg font-bold text-[#173653]">Our Services</h3>
          <div className="mt-2 h-0.5 w-10 bg-[#0086da]" />
          <ul className="mt-4">
            {otherServices.map((s) => (
              <li key={s.path}>
                <NavLink to={s.path} className={sideLink}>
                  › {s.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}