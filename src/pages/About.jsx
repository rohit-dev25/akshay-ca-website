import { Link } from "react-router-dom";

const mission = [
  "To provide accurate and dependable services every time.",
  "To give practical, clear and problem-solving advice.",
  "To respond quickly and stay approachable.",
  "To keep learning and stay updated with changing laws.",
];

const values = [
  { title: "Integrity", text: "Doing the right thing in a fair and ethical manner." },
  { title: "Knowledge", text: "Learning continuously and staying updated with the law." },
  { title: "Independence", text: "Giving honest and unbiased advice." },
  { title: "Confidentiality", text: "Keeping every client's information safe and private." },
  { title: "Client Focus", text: "Listening first and understanding each client's needs." },
  { title: "Responsibility", text: "Taking ownership of the work and meeting deadlines." },
];

export default function About() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">About Us</h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1">›</span> About us
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 py-14 md:px-8">
        <h2 className="text-2xl font-bold text-[#173653] md:text-3xl">
          Akshaya S D &amp; Associates
        </h2>
        <div className="mt-3 h-1 w-16 bg-[#0086da]" />

        <div className="mt-8 space-y-5 leading-8 text-gray-600 md:text-justify">
          <p>
            Akshaya S D &amp; Associates is a Chartered Accountancy firm based in
            Ranebennur, Karnataka. The firm was started in 2024 by CA Akshay
            Doddagoudara, with the aim of giving individuals, traders and small
            businesses reliable financial guidance close to home.
          </p>
          <p>
            The firm provides services in taxation, GST, audit and accounting.
            Every client works directly with the Chartered Accountant, so the
            advice is personal, clear and easy to understand.
          </p>
        </div>
      </section>

      {/* Purpose, Vision, Mission */}
      <section className="bg-[#f5f9fd] px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#0086da]">Our Purpose</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              To add value to people and businesses through honest, professional
              financial service.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#0086da]">Our Vision</h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              To be the first choice for trusted financial and taxation advice in
              our region.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#0086da]">Our Mission</h3>
            <ul className="mt-3 space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex gap-3 text-sm leading-6 text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#0086da]">
                    ✓
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#173653] md:text-3xl">
              Our Core Values
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-[#0086da]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0086da] text-lg text-[#0086da]">
                    ›
                  </span>
                  <h3 className="text-lg font-bold text-[#173653]">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl bg-[#f5f9fd] px-8 py-10 text-center md:flex-row md:text-left">
          <h2 className="text-xl font-bold text-[#173653] md:text-2xl">
            Have a question? We are happy to help.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 rounded-lg bg-[#0086da] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006eb5]"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}