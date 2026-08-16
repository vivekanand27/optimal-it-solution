import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using optimalitsolution.com and contacting Optimal IT Solution for software development, web development, and digital marketing services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "https://optimalitsolution.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-primary">
          <div className="container py-4">
            <p className="text-muted fw-semibold text-uppercase small mb-2">
              Legal information
            </p>
            <h1 className="display-5 fw-bold">Terms and Conditions</h1>
            <p className="lead text-muted mb-0">
              Please read these terms before using this website.
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

                <h2 className="h5 fw-bold mt-4">Use of This Website</h2>
                <p className="text-muted">
                  By using optimalitsolution.com, you agree to use this website only
                  for lawful purposes. You must not misuse the website, attempt to
                  disrupt its operation, or use it to send harmful, misleading, or
                  unlawful content.
                </p>

                <h2 className="h5 fw-bold mt-4">Service Information</h2>
                <p className="text-muted">
                  Information about our software development, web development, digital
                  marketing, SEO, PPC, and consulting services is provided for general
                  informational purposes. Final scope, timelines, pricing, and
                  deliverables are agreed separately in writing for each project.
                </p>

                <h2 className="h5 fw-bold mt-4">Quotes and Pricing</h2>
                <p className="text-muted">
                  Any prices shown on this website, including starting prices, are
                  indicative and may change depending on project requirements,
                  complexity, third-party costs, maintenance needs, and timelines.
                </p>

                <h2 className="h5 fw-bold mt-4">Intellectual Property</h2>
                <p className="text-muted">
                  The text, design, branding, and other content on this website belong
                  to Optimal IT Solution or are used with permission. You may not copy,
                  reproduce, or redistribute website content without prior written
                  permission.
                </p>

                <h2 className="h5 fw-bold mt-4">External Links</h2>
                <p className="text-muted">
                  This website may include links to third-party websites. These links
                  are provided for convenience and reference. We do not control and are
                  not responsible for third-party website content, policies, or
                  practices.
                </p>

                <h2 className="h5 fw-bold mt-4">Limitation of Liability</h2>
                <p className="text-muted">
                  We aim to keep information accurate and the website available, but we
                  do not guarantee uninterrupted access or error-free content. To the
                  maximum extent permitted by law, Optimal IT Solution is not liable for
                  indirect, incidental, or consequential losses related to website use.
                </p>

                <h2 className="h5 fw-bold mt-4">Changes to These Terms</h2>
                <p className="text-muted">
                  We may update these terms from time to time. Updated terms will be
                  posted on this page with a revised date.
                </p>

                <h2 className="h5 fw-bold mt-4">Contact Us</h2>
                <p className="text-muted mb-0">
                  For questions about these terms, contact us at{" "}
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
