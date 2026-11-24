
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Income Tax",
    description:
      "Professional assistance with income tax planning, filing and compliance.",
    icon: "📄",
    path: "/services/income-tax",
  },
  {
    number: "02",
    title: "GST",
    description:
      "Reliable GST registration, returns and compliance support.",
    icon: "📊",
    path: "/services/gst/review-services",
  },
  {
    number: "03",
    title: "Audit & Assurance",
    description:
      "Independent audit and assurance services with professional care.",
    icon: "⚖️",
    path: "/services/audit",
  },
  {
    number: "04",
    title: "Accounting & Bookkeeping",
    description:
      "Organized financial records and accurate accounting solutions.",
    icon: "🧮",
    path: "/services/accounting",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center bg-[#f1f7fc]">
        <div className="absolute inset-0">
          <img
            src="/Modern%20Finance%20Workspace%20with%20Growth%20Charts.png"
            alt="Modern financial workspace with growth charts"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 lg:py-32">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            <motion.span
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0086da]"
            >
              Chartered Accountants · Ranebennur
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-tight tracking-tight text-[#173653] sm:text-5xl lg:text-6xl"
            >
              Your Trusted Partner in{" "}
              <span className="text-[#0086da]">
                Financial & Taxation
              </span>{" "}
              Matters.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg"
            >
              Professional guidance for individuals and businesses through
              reliable accounting, taxation and compliance services.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#our-services"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-[#0086da] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors duration-300 hover:bg-[#006eb5]"
              >
                View Our Services ↓
              </motion.a>

              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-block rounded-lg border border-[#0086da] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#0086da] transition-all duration-300 hover:bg-[#0086da] hover:text-white"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="our-services"
        className="scroll-mt-24 bg-white px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#0086da]">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#173653] md:text-4xl">
              Our Professional Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Comprehensive financial solutions designed to support your
              personal and business requirements.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.div
                key={service.path}
                variants={cardReveal}
                whileHover={{ y: -9, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  to={service.path}
                  className="group block h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl transition-colors duration-300 group-hover:bg-[#0086da]">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </span>
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#0086da]">
                    {service.number}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-[#173653] transition-colors group-hover:text-[#0086da]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold text-[#0086da]">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="bg-[#f5f9fd] px-5 py-20 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl bg-blue-100" />

            <img
              src="/images/values-blocks.jpg"
              alt="Wooden blocks representing professional values and growth"
              className="relative z-10 h-[320px] w-full rounded-2xl object-cover shadow-lg md:h-[430px]"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="relative z-10">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#0086da]">
              About Our Firm
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#173653] md:text-4xl">
              Building Trust Through Professional Excellence
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Akshaya S D &amp; Associates is a Chartered Accountancy firm based
              in Ranebennur, Karnataka, established in 2024 by CA Akshaya
              Doddagoudara. We aim to provide dependable financial, taxation and
              accounting services with a focus on professionalism and client
              relationships.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Professional and ethical approach",
                "Personalized client attention",
                "Commitment to quality and accuracy",
                "Reliable financial guidance",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-[#0086da]">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/about"
                className="mt-8 inline-block rounded-lg bg-[#0086da] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#006eb5]"
              >
                Know More →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CLIENT RELATIONSHIP SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="bg-white px-5 py-20 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#0086da]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#173653] md:text-4xl">
              Understanding Your Needs. Supporting Your Growth.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every client has different financial requirements. We believe in
              understanding those requirements and providing practical, clear
              and professional guidance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <motion.div
                variants={cardReveal}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-blue-50 p-5"
              >
                <h3 className="font-bold text-[#0086da]">
                  Client Focus
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Attention to individual client requirements.
                </p>
              </motion.div>

              <motion.div
                variants={cardReveal}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-blue-50 p-5"
              >
                <h3 className="font-bold text-[#0086da]">
                  Professional Care
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Responsible and dependable service.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/client-meeting.jpg"
              alt="Chartered accountant discussing documents with a client"
              className="h-[320px] w-full rounded-2xl object-cover shadow-xl md:h-[420px]"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#edf6fd] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#0086da]">
              Our Commitment
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#173653] md:text-4xl">
              Why Choose Akshaya S D &amp; Associates?
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: "🤝",
                title: "Trusted Partnership",
                text: "Building professional and lasting relationships.",
              },
              {
                icon: "⭐",
                title: "Quality Service",
                text: "A focus on accuracy and professional standards.",
              },
              {
                icon: "⏱️",
                title: "Timely Support",
                text: "Attentive support for your financial requirements.",
              },
              {
                icon: "📈",
                title: "Client-Centric",
                text: "Solutions based on your specific needs.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardReveal}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold text-[#173653]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="bg-white px-5 py-16 md:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-2xl bg-gradient-to-r from-[#006eb5] to-[#0086da] px-8 py-12 text-center shadow-xl md:flex-row md:px-14 md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Let's Build a Stronger Financial Future Together
            </h2>

            <p className="mt-3 text-sm leading-7 text-blue-50 md:text-base">
              Get in touch for professional financial guidance and support.
            </p>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              1st Floor, Radder Complex, Beside Adishakti Temple, Vageesh Nagar,
              Ranebennur, Karnataka 581115
            </p>
          </div>

          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-block shrink-0 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-[#0086da] transition-colors duration-300 hover:bg-blue-50"
            >
              Contact Us →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
