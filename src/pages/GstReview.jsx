import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

const gst = services.find((s) => s.children);

const periodicCovers = [
  "Outward supplies: tax rates applied, exemptions claimed, conditions fulfilled and treatment of exports",
  "Input tax credit: eligibility, supporting documents, completeness and matching with the auto-generated statement (GSTR-2B)",
  "Registration, payment of tax and return filing, and whether the return data agrees with your books",
  "Reverse charge: whether it was identified, paid and claimed as credit correctly",
  "Movement of goods, including job work and related documents",
  "Internal controls, with suggestions to improve GST compliance",
];

const areaReviews = [
  "Sales and outward supplies",
  "Purchases and input tax credit",
  "Exports",
  "Refund claims",
  "Contracts and agreements",
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

export default function GstReview() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            GST Review Services
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            GST Services
            <span className="mx-1"> › </span>
            Review Services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            GST has been in force in India since 1 July 2017. Rates, rules and
            procedures change often, and many businesses find it hard to keep up
            with them. A GST review checks whether the returns you have filed
            and the credit you have claimed match your books and the law.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice aims to provide careful and
            practical GST review support to traders, service providers and other
            registered businesses. The services offered are as follows.
          </p>

          <Heading>GST Compliance Review on a Periodical Basis</Heading>
          <p className="mt-4">
            Notifications, circulars and changes in the law come often, and the
            level of compliance needed is high. A regular review of your sales,
            purchases, stock and accounts helps find mistakes early, make full
            use of the credit you are entitled to, and apply changes in rates on
            time. Broadly, the review covers:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {periodicCovers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>GST Area-Specific Reviews</Heading>
          <p className="mt-4">
            Some businesses only need certainty about one part of their GST
            position. In that case, we carry out a focused review of the area
            you choose, such as:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {areaReviews.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>Review of Systems</Heading>
          <p className="mt-4">
            Many GST processes are now automated, so correct set-up matters. We
            review how GST is handled in your accounting software and daily
            work, including tax rates, HSN/SAC codes, invoicing and the data
            used for returns, and suggest improvements that suit your business
            and the law.
          </p>

          <Heading>GST Review Before a Departmental Audit</Heading>
          <p className="mt-4">
            The GST department may audit registered persons or send notices. A
            review before that stage helps find weak areas early and correct
            what can still be corrected, which may reduce the risk of dispute
            later.
          </p>

          <Heading>GST Due Diligence Review</Heading>
          <p className="mt-4">
            When a business is bought, merged or restructured, the buyer often
            wants to know its tax exposure. A GST due diligence review looks at
            compliance and past positions to identify risks that may pass to the
            new owner, and suggests ways to address them.
          </p>

          <Heading>GST Compliance Review to Support Auditors</Heading>
          <p className="mt-4">
            Statutory, tax and internal auditors have to report on compliance
            with several laws, including GST. We support chartered accountants
            and other professionals with GST compliance review during their
            audits.
          </p>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            The scope of a review depends on your records and the period
            covered, and the findings depend on the facts and the law in force.
            Please contact us to discuss what suits your business.
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