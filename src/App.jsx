import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import IncomeTax from "./pages/IncomeTax";
import Audit from './pages/Audit'
import Accounting from './pages/Accounting'
import GstReview from './pages/GstReview'
import GstCompliance from './pages/GstCompliance'
import GstRefund from './pages/GstRefund'
import GstAdvisory from './pages/GstAdvisory'

// Scrolls to the top every time the page changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/income-tax" element={<IncomeTax />} />
        <Route path="/services/audit" element={<Audit />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/gst/review-services" element={<GstReview />} />
        <Route
          path="/services/gst/compliance-and-system-setting-support"
          element={<GstCompliance />}
        />
        <Route path="/services/gst/refund-services" element={<GstRefund />} />
        <Route
          path="/services/gst/advisory-and-consultancy"
          element={<GstAdvisory />}
        />
      </Routes>

      <Footer />
    </>
  );
}