import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Optimal IT Solution. Learn how we collect, use, and protect information submitted through optimalitsolution.com.",
  openGraph: {
    url: "https://optimalitsolution.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-primary">
          <div className="container py-4">
            <p className="text-muted fw-semibold text-uppercase small mb-2">
              Legal information
            </p>
            <h1 className="display-5 fw-bold">Privacy Policy</h1>
            <p className="lead text-muted mb-0">
              How Optimal IT Solution handles information on this website.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <p className="text-muted small mb-4">
                  Last updated: June 22, 2026
                </p>

                <h2 className="h5 fw-bold mt-4">Information We Collect</h2>
                <p className="text-muted">
                  When you contact us through this website, email, phone, or other
                  communication channels, we may collect your name, email address,
                  phone number, project details, and any other information you choose
                  to share with us.
                </p>

                <h2 className="h5 fw-bold mt-4">How We Use Information</h2>
                <p className="text-muted">
                  We use the information you provide to respond to inquiries, prepare
                  project quotes, provide software development or marketing services,
                  improve our website, and communicate with you about requested
                  services.
                </p>

                <h2 className="h5 fw-bold mt-4">Cookies, Analytics, and Advertising</h2>
                <p className="text-muted">
                  This website may use cookies or similar technologies to improve user
                  experience, understand website performance, and support advertising
                  features. If we use third-party advertising services such as Google
                  AdSense, those providers may use cookies to serve ads based on visits
                  to this and other websites.
                </p>
                <p className="text-muted">
                  You can learn more about how Google uses information from sites that
                  use its services at{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google&apos;s partner sites policy
                  </a>.
                </p>

                <h2 className="h5 fw-bold mt-4">Sharing of Information</h2>
                <p className="text-muted">
                  We do not sell your personal information. We may share limited
                  information with trusted service providers only when needed to operate
                  this website, respond to inquiries, deliver requested services, comply
                  with law, or protect our rights.
                </p>

                <h2 className="h5 fw-bold mt-4">Data Security</h2>
                <p className="text-muted">
                  We take reasonable steps to protect information submitted to us.
                  However, no method of transmission over the internet or electronic
                  storage is completely secure, so we cannot guarantee absolute
                  security.
                </p>

                <h2 className="h5 fw-bold mt-4">External Links</h2>
                <p className="text-muted">
                  Our website may link to third-party websites, including customer
                  websites and service providers. We are not responsible for the privacy
                  practices or content of those external websites.
                </p>

                <h2 className="h5 fw-bold mt-4">Your Choices</h2>
                <p className="text-muted">
                  You may contact us to request access, correction, or deletion of
                  personal information you have provided to us, subject to any legal or
                  business record requirements.
                </p>

                <h2 className="h5 fw-bold mt-4">Contact Us</h2>
                <p className="text-muted mb-0">
                  For privacy-related questions, contact us at{" "}
                  <a href="mailto:optimalitsolution26@gmail.com">
                    optimalitsolution26@gmail.com
                  </a>
                  , call{" "}
                  <a href="tel:+918851335509">8851335509</a>, or visit our{" "}
                  <Link href="/contact">Contact page</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
