import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Optimal IT Solution",
  description:
    "Get in touch for a quote or to discuss your project. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container py-4">
            <h1 className="display-5 fw-bold">Contact Us</h1>
            <p className="lead mb-0 opacity-90">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <h2 className="h5 fw-bold mb-3">Get in touch</h2>
                <p className="text-muted mb-4">
                  Describe your project or ask a question. We typically respond
                  within 24-48 hours.
                </p>
                <div className="mb-4">
                  <strong className="d-block text-uppercase small text-muted mb-1">
                    Email
                  </strong>
                  <a
                    href="mailto:optimalitsolution26@gmail.com"
                    className="text-decoration-none"
                  >
                    optimalitsolution26@gmail.com
                  </a>
                </div>
                <div className="mb-4">
                  <strong className="d-block text-uppercase small text-muted mb-1">
                    Phone
                  </strong>
                  <a
                    href="tel:+918851335509"
                    className="text-decoration-none"
                  >
                    8851335509
                  </a>
                </div>
                <div className="mb-4">
                  <strong className="d-block text-uppercase small text-muted mb-1">
                    Address
                  </strong>
                  <span className="text-muted">
                    Kabir Nagar, Raipur, Chhattisgarh 492099
                  </span>
                </div>
                <div>
                  <strong className="d-block text-uppercase small text-muted mb-1">
                    Website
                  </strong>
                  <a
                    href="https://optimalitsolution.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    https://optimalitsolution.com
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4 p-lg-5">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
