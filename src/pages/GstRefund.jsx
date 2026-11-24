import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

const gst = services.find((s) => s.children);

const exportSupport = [
  "Comparing the available ways of exporting and recommending the one that suits you",
  "Setting up your records so that the documents needed for a refund claim are ready",
  "Collecting supporting documents, such as shipping bills and proof of export",
  "Preparing the refund claim as required by law",
  "Filing the claim on the GST portal and following it up",
  "Responding to queries from the department on the claim",
];

const otherRefunds = [
  "Tax paid in excess, or on a transaction that is not subject to GST",
  "Balance lying in the electronic cash ledger",
  "Tax paid under the wrong head, such as CGST and SGST instead of IGST",
  "Supplies made to Special Economic Zone units or developers",
  "Credit notes that could not be adjusted because there was no later tax liability",
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

export default function GstRefund() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            GST Refund Services
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            GST Services
            <span className="mx-1"> › </span>
            Refund Services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            In some situations a registered person can claim a refund of GST.
            A refund claim needs correct calculations, complete documents and
            filing within the time limit set by law, and a delay can mean losing
            the refund.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice aims to help with preparing and
            following up refund claims. The services offered are as follows.
          </p>

          <Heading>Refund on Export of Goods or Services</Heading>
          <p className="mt-4">
            The aim of the law is that goods and services leave India without the
            tax on them. For this, an exporter can either export on payment of
            IGST and claim a refund of that tax, or export without payment of
            tax under a Letter of Undertaking (LUT) and claim a refund of the
            unused input tax credit. Which option is better depends on your
            cash flow, the credit you hold and the nature of your business.
          </p>
          <p className="mt-4">Our support for export refunds includes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {exportSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Heading>Inverted Duty Structure Refund</Heading>
          <p className="mt-4">
            An inverted duty structure arises when the tax rate on inputs is
            higher than the tax rate on the goods or services supplied, which
            leaves input tax credit unused. A refund of this credit is allowed
            only for certain goods and services and subject to conditions.
          </p>
          <p className="mt-4">
            We help you check the classification and the rates, find out whether
            you are eligible, work out the refund amount, prepare the documents
            and follow up with the department.
          </p>

          <Heading>Other Refunds</Heading>
          <p className="mt-4">
            Refunds can also arise in other situations, such as:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {otherRefunds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            In each case we help prepare the documents, file the claim and
            follow it up.
          </p>

          <p className="mt-10 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-500">
            Whether a refund is available depends on the facts of each case, the
            conditions in the law and the time limit for claiming it. Please
            contact us to discuss your situation.
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