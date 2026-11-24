import { Link, NavLink } from "react-router-dom";
import { services } from "../data/services";

// Side list: services that have their own page (GST pages are reached from the menu)
const otherServices = services.filter((s) => !s.children);

const documents = [
  "Bank statements and passbooks",
  "Sales and purchase invoices",
  "Expense bills and vouchers",
  "Previous year's financial statements and trial balance",
  "GST and TDS returns filed earlier, if any",
  "Loan statements and fixed asset details",
];

const benefits = [
  "Accurate figures for filing income tax and GST returns",
  "Easier loan applications, since banks ask for proper financial statements",
  "A clear picture of profit, cash flow and dues",
  "Fewer errors and less stress during audits and notices",
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

export default function Accounting() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Accounting &amp; Bookkeeping
          </h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-1"> › </span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span className="mx-1"> › </span>
            Accounting &amp; Bookkeeping
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1fr_260px]">
        {/* Main text */}
        <div className="leading-8 text-gray-600 md:text-justify">
          <p>
            Good accounts are the base of every tax return, audit and loan
            application. Companies are legally required to maintain proper books
            of account under the Companies Act, 2013, and many businesses and
            professionals must do the same under tax laws.
          </p>

          <p className="mt-5">
            Akshaya S D &amp; Associates, Chartered Accountants, is based in
            Ranebennur, Karnataka. The practice helps individuals, traders,
            firms and companies keep their records accurate, organised and ready
            for compliance. The services offered are as follows.
          </p>

          <Heading>Bookkeeping</Heading>
          <p className="mt-4">
            Day-to-day recording of sales, purchases, receipts, payments and
            expenses, so that your books are always up to date.
          </p>

          <Heading>Bank &amp; Ledger Reconciliation</Heading>
          <p className="mt-4">
            Matching your books with bank statements and party ledgers to catch
            missing entries, errors and differences early.
          </p>

          <Heading>Financial Statements</Heading>
          <p className="mt-4">
            Preparation of the profit and loss account and balance sheet at year
            end, following the accounting standards that apply to your entity.
          </p>

          <Heading>Accounting Software Support</Heading>
          <p className="mt-4">
            Setting up and maintaining your accounts in accounting software such
            as Tally, and helping your staff use it properly.
          </p>

          <Heading>Payroll Support</Heading>
          <p className="mt-4">
            Salary calculation and payroll records for small and medium
            businesses, kept in order for statutory requirements.
          </p>

          <Heading>MIS &amp; Periodic Reports</Heading>
          <p className="mt-4">
            Simple monthly or quarterly reports on sales, expenses, receivables
            and payables, to help you understand where your business stands.
          </p>

          <Heading>Documents We Usually Need</Heading>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {documents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            The exact list depends on your type of business. We will tell you
            what is needed when you get in touch.
          </p>

          <Heading>Why Proper Books Matter</Heading>
          <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#0086da]">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 border-t border-gray-200 pt-6">
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