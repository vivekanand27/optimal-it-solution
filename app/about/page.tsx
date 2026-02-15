import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us — Software Development Company in India",
  description:
    "Optimal IT Solution is a software development company in Raipur, Chhattisgarh, serving clients across India and neighbouring states. Learn about our team, values, and approach to custom software and IT solutions.",
  openGraph: {
    url: "https://optimalitsolution.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container py-4">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="lead mb-0 opacity-90">
              We&apos;re a software company that believes in building solutions
              that last.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Our Story</h2>
                <p className="text-muted">
                  Optimal IT Solution started with a simple idea: businesses
                  deserve software that fits their needs, not the other way
                  around. We build custom web applications, streamline workflows,
                  and help teams ship faster — without the bloat of one-size-fits-all
                  tools.
                </p>
                <p className="text-muted mb-0">
                  Whether you need a new product from scratch, an integration with
                  your existing stack, or guidance on architecture and delivery,
                  we focus on clarity, quality, and long-term value.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-3 p-4 p-lg-5 border border-1">
                  <h3 className="h5 fw-bold mb-4">What We Believe</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-start gap-3 mb-3">
                      <span className="badge bg-primary rounded-pill mt-1">
                        1
                      </span>
                      <div>
                        <strong>Simplicity wins.</strong> Clean code and clear
                        UX beat feature creep every time.
                      </div>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-3">
                      <span className="badge bg-primary rounded-pill mt-1">
                        2
                      </span>
                      <div>
                        <strong>Your domain matters.</strong> We learn your
                        business so the software we build actually helps.
                      </div>
                    </li>
                    <li className="d-flex align-items-start gap-3">
                      <span className="badge bg-primary rounded-pill mt-1">
                        3
                      </span>
                      <div>
                        <strong>Ship and iterate.</strong> Get something useful
                        in your hands fast, then improve with feedback.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4">Why Work With Us?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fs-4 fw-bold">
                    —
                  </div>
                  <h5 className="fw-bold">Direct communication</h5>
                  <p className="text-muted small mb-0">
                    No endless chains of account managers. You work with people
                    who build.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fs-4 fw-bold">
                    —
                  </div>
                  <h5 className="fw-bold">Modern stack</h5>
                  <p className="text-muted small mb-0">
                    We use proven, maintainable technologies so your product stays
                    fast and updatable.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fs-4 fw-bold">
                    —
                  </div>
                  <h5 className="fw-bold">Outcome-focused</h5>
                  <p className="text-muted small mb-0">
                    We care about your goals — launch, revenue, efficiency — not
                    just lines of code.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
