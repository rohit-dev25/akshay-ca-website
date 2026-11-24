import { useState } from "react";
import { Link } from "react-router-dom";

// ---- Contact details and form key ----
const phone = "+91 81970 32266";
const email = "ca.akshayakki@gmail.com";

// Web3Forms access key
const ACCESS_KEY = "2264435c-c10a-4d92-8746-0e37a333cc81";
// --------------------------------------

const address =
  "1st Floor, Radder Complex, Beside Adishakti Temple, 3rd Cross Road, Vageesh Nagar, Ranebennur 581115, Karnataka, India";

const mapQuery = encodeURIComponent(
  "Radder Complex, Vageesh Nagar, Ranebennur, Karnataka 581115"
);
const mapEmbed = `https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#0086da] focus:ring-2 focus:ring-[#0086da]/20";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New enquiry from the website",
          from_name: "Akshaya S D & Associates website",
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#006eb5] to-[#0086da] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Contact Us</h1>
          <p className="mt-3 text-sm text-blue-100">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1">›</span> Contact us
          </p>
        </div>
      </section>

      {/* Details + form */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-5">
        {/* Details */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#173653]">Get in touch</h2>
          <div className="mt-3 h-1 w-16 bg-[#0086da]" />
          <p className="mt-5 text-sm leading-7 text-gray-600">
            Visit our office or send us a message. We will get back to you as
            soon as possible.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 rounded-xl bg-[#f5f9fd] p-5">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold text-[#173653]">Office</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Akshaya S D &amp; Associates
                  <br />
                  {address}
                </p>
              </div>
            </div>

            {phone && (
              <div className="flex gap-4 rounded-xl bg-[#f5f9fd] p-5">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-bold text-[#173653]">Phone</h3>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-gray-600 hover:text-[#0086da]"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {email && (
              <div className="flex gap-4 rounded-xl bg-[#f5f9fd] p-5">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="font-bold text-[#173653]">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block break-all text-sm text-gray-600 hover:text-[#0086da]"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8 lg:col-span-3">
          <h2 className="text-xl font-bold text-[#173653]">Send us a message</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phone number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-[#0086da] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006eb5] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                Thank you. Your message has been sent. We will contact you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                Sorry, the message could not be sent right now. Please try again
                later or contact us directly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="px-5 pb-16 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <iframe
            title="Akshaya S D & Associates location"
            src={mapEmbed}
            className="h-[320px] w-full md:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mx-auto mt-4 max-w-7xl text-sm text-gray-500">
          Map not loading?{" "}
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#0086da] hover:underline"
          >
            Open in Google Maps →
          </a>
        </p>
      </section>
    </main>
  );
}