import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

// Side list: services that have their own page (GST pages are reached from the menu)
const otherServices = services.filter((s) => !s.children);

const whoNeeds = [
  "Businesses and professionals whose turnover or receipts cross the tax audit limits",
  "Companies and LLPs that need a statutory audit",
  "Borrowers whose banks ask for a stock audit or certificates",
  "Trusts, societies and non-profit organisations",
  "Growing businesses that want better internal controls",
];

const steps = [
  "Understanding the entity: we learn about your business, records and the law that applies to you.",
  "Planning: we decide the scope, timeline and the documents needed.",
  "Verification: we examine books, vouchers, bank records and other evidence.",
  "Reporting: we prepare the audit report and forms in the format the law requires.",
  "Discussion: we explain our findings and suggest improvements.",
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

export default function Audit() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Audit &amp; Assurance
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            Audit &amp; Assurance
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            An audit is an independent examination of accounts and records. Its
            purpose is to give owners, lenders, regulators and tax authorities a
            reliable opinion on whether the financial information is correct and
            prepared as the law requires.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. Audit and assurance work is carried out in
            line with the Standards on Auditing issued by the Institute of
            Chartered Accountants of India (ICAI). The services offered are as
            follows.
          </p>

          <Heading>Tax Audit</Heading>
          <p className="mt-4">
            Audit of books of account under Section 63 of the Income-tax Act,
            2025 (earlier Section 44AB), for businesses and professionals whose
            turnover or receipts cross the limits set by law. The report is
            filed on the prescribed form (Form 26, earlier Forms 3CA/3CB and
            3CD).
          </p>

          <Heading>Statutory Audit</Heading>
          <p className="mt-4">
            Audit of the financial statements of companies and LLPs where
            required by the Companies Act, 2013 or the LLP Act, 2008. The
            auditor's report gives an opinion on whether the statements give a
            true and fair view.
          </p>

          <Heading>Internal Audit</Heading>
          <p className="mt-4">
            A review of internal controls, processes and records to find errors,
            gaps and risks, with practical suggestions to fix them. Internal
            audit is required for certain companies under the Companies Act,
            2013, and is useful for any growing business.
          </p>

          <Heading>Stock &amp; Inventory Audit</Heading>
          <p className="mt-4">
            Physical verification of stock and review of related records, often
            asked for by banks and lenders for working-capital facilities.
          </p>

          <Heading>Audit of Trusts, Societies &amp; Non-Profits</Heading>
          <p className="mt-4">
            Audit of the accounts of trusts, societies and charitable
            institutions, in line with the law that governs them and the
            Income-tax Act.
          </p>

          <Heading>Certification Work</Heading>
          <p className="mt-4">
            Certificates based on verified records, such as net worth and
            turnover certificates for banks, loans, tenders and visas.
          </p>

          <Heading>Who May Need an Audit?</Heading>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {whoNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>How an Audit Works</Heading>
          <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#0086da]">
            {steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            Audit requirements depend on the type of entity, its turnover and the
            law in force. Please contact us to check what applies to you.
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