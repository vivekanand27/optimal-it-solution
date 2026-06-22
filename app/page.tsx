import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeCarousel } from "@/components/HomeCarousel";
import { CustomerLogo } from "@/components/CustomerLogo";
import Link from "next/link";

export const metadata = {
  title: "Software Development Company | Custom Web & App Development",
  description:
    "Optimal IT Solution — trusted software and web development company for modern businesses. Custom software, web & mobile apps, digital marketing, and SEO. Get a free quote.",
  openGraph: {
    title: "Software Development Company | Optimal IT Solution",
    description:
      "Trusted software and web development company for modern businesses. Custom software, web & app development, digital marketing & SEO.",
    url: "https://optimalitsolution.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-5 hero-section" aria-label="Introduction">
          <div className="container py-3 py-md-4">
            <div className="hero-shell text-center p-4 p-md-5 mx-auto">
            <p className="hero-eyebrow fw-semibold text-uppercase small mb-3">
              Software development company · Serving clients across India
            </p>
            <h1 className="hero-heading display-2 fw-bold mb-3">
              Optimal IT <span className="text-primary">Solution</span>
            </h1>
            <p className="hero-tagline display-6 fw-bold mb-3">
              We Build Software That <span className="text-primary">Works</span>
            </p>
            <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: "42rem" }}>
              Custom software development, web applications & mobile apps. We deliver clean,
              maintainable code and clear communication — so you get a product
              that lasts.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
              <Link className="btn btn-primary btn-lg px-4" href="/contact">
                Get in Touch
              </Link>
              <Link className="btn btn-outline-dark btn-lg px-4" href="/services">
                View Services
              </Link>
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <span className="trust-pill">Websites from ₹4,999</span>
              <span className="trust-pill">24h response time</span>
              <span className="trust-pill">Launch-ready support</span>
            </div>
            </div>
          </div>
        </section>

        {/* Carousel (left) + Get your business online (right) */}
        <section className="py-5 get-online-section" aria-label="Our work and get your business online">
          <div className="container">
            <div className="row align-items-stretch g-4">
              <div className="col-lg-6 order-2 order-lg-1">
                <HomeCarousel embed />
              </div>
              <div className="col-lg-6 order-1 order-lg-2 d-flex">
                <div className="rounded-4 shadow-lg get-online-card bg-primary bg-opacity-10 p-4 p-lg-4 w-100 d-flex flex-column justify-content-center">
                  <p className="section-kicker mb-2">Simple website packages</p>
                  <h2 className="fw-bold mb-3 display-6">Get Your Business Online</h2>
                  <p className="lead text-dark mb-2">
                    A professional website puts your business in front of customers 24/7 — even when you&apos;re not working.
                  </p>
                  <p className="text-muted mb-4">
                    Take your business online with a fast, mobile-friendly website. We make it simple and affordable.
                  </p>
                  <p className="mb-1 fw-bold fs-3 text-primary">Website from just ₹4,999</p>
                  <p className="small text-muted mb-4">Starting price · No hidden costs</p>
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Get a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Happy customers */}
        <section className="py-5 bg-light" aria-label="Happy customers">
          <div className="container">
            <div className="text-center mb-4">
              <p className="section-kicker mb-2">Recent work</p>
              <h2 className="fw-bold mb-2">Happy Customers</h2>
              <p className="text-muted mb-0">
                Businesses that trust us for design and development
              </p>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="https://lakshmihomeo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img
                          src="https://www.google.com/s2/favicons?domain=lakshmihomeo.com&sz=64"
                          alt="Lakshmi Homeopathy logo"
                          width={40}
                          height={40}
                          className="rounded-circle border"
                        />
                        <div>
                          <h3 className="h5 fw-bold mb-0 text-dark">
                            Lakshmi Homeopathy
                          </h3>
                          <p className="small text-muted mb-0">
                            lakshmihomeo.com
                          </p>
                        </div>
                      </div>
                      <p className="text-muted mb-3">
                        E-commerce website for genuine homeopathic medicines with
                        product listings, offers, and all-India delivery.
                      </p>
                      <span className="small fw-semibold text-primary">
                        Visit website →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="https://www.priya-tour-and-travels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <img
                          src="https://www.google.com/s2/favicons?domain=priya-tour-and-travels.com&sz=64"
                          alt="Priya Tour and Travels logo"
                          width={40}
                          height={40}
                          className="rounded-circle border"
                        />
                        <div>
                          <h3 className="h5 fw-bold mb-0 text-dark">
                            Priya Tour and Travels
                          </h3>
                          <p className="small text-muted mb-0">
                            priya-tour-and-travels.com
                          </p>
                        </div>
                      </div>
                      <p className="text-muted mb-3">
                        Premium cab booking website highlighting fleet, routes,
                        transparent pricing, and easy inquiry options.
                      </p>
                      <span className="small fw-semibold text-primary">
                        Visit website →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <a
                  href="https://www.maalaxmitoursandtravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <CustomerLogo
                          src="https://www.maalaxmitoursandtravels.com/images/logo/logo_2.png"
                          fallbackSrc="/customers/maa-laxmi-logo.png"
                          alt="Maa Laxmi Tours and Travels logo"
                        />
                        <div>
                          <h3 className="h5 fw-bold mb-0 text-dark">
                            Maa Laxmi Tours and Travels
                          </h3>
                          <p className="small text-muted mb-0">
                            maalaxmitoursandtravels.com
                          </p>
                        </div>
                      </div>
                      <p className="text-muted mb-3">
                        Taxi service and cab booking website built to present
                        travel services clearly and bring more inquiries online.
                      </p>
                      <span className="small fw-semibold text-primary">
                        Visit website →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-4 bg-primary">
          <div className="container">
            <div className="row g-4 text-center">
              <div className="col-6 col-md-3">
                <div className="stat-number display-6 fw-bold">50+</div>
                <div className="small opacity-90">Projects delivered</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-number display-6 fw-bold">10+</div>
                <div className="small opacity-90">Industries served</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-number display-6 fw-bold">100%</div>
                <div className="small opacity-90">Client-focused</div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-number display-6 fw-bold">24h</div>
                <div className="small opacity-90">Response time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="text-center mb-4">
              <p className="section-kicker mb-2">What we build</p>
              <h2 className="fw-bold mb-2">Our Services</h2>
              <p className="text-muted">What we do best</p>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body p-4">
                    <div className="icon-bubble mb-3">
                      <span className="fs-4">◆</span>
                    </div>
                    <h5 className="card-title fw-bold">Digital Marketing</h5>
                    <p className="card-text text-muted">
                      Data-driven campaigns to grow your audience and conversions.
                    </p>
                    <Link href="/services#digital-marketing" className="btn btn-sm btn-outline-primary">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body p-4">
                    <div className="icon-bubble mb-3">
                      <span className="fs-4">◆</span>
                    </div>
                    <h5 className="card-title fw-bold">Web & App Development</h5>
                    <p className="card-text text-muted">
                      Professional websites from ₹4,999. Your business stays online 24/7 — web & mobile apps built with modern tech.
                    </p>
                    <Link href="/services#web-app-development" className="btn btn-sm btn-outline-primary">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body p-4">
                    <div className="icon-bubble mb-3">
                      <span className="fs-4">◆</span>
                    </div>
                    <h5 className="card-title fw-bold">SEO & PPC Advertising</h5>
                    <p className="card-text text-muted">
                      Get found on search and run effective pay-per-click campaigns.
                    </p>
                    <Link href="/services#seo-ppc" className="btn btn-sm btn-outline-primary">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body p-4">
                    <div className="icon-bubble mb-3">
                      <span className="fs-4">◆</span>
                    </div>
                    <h5 className="card-title fw-bold">Social Media Management</h5>
                    <p className="card-text text-muted">
                      Content, scheduling, and community management across platforms.
                    </p>
                    <Link href="/services#social-media-management" className="btn btn-sm btn-outline-primary">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 hover-lift">
                  <div className="card-body p-4">
                    <div className="icon-bubble mb-3">
                      <span className="fs-4">◆</span>
                    </div>
                    <h5 className="card-title fw-bold">Custom Software Solution</h5>
                    <p className="card-text text-muted">
                      Tailored software, dashboards, and automation for your business.
                    </p>
                    <Link href="/services#custom-software" className="btn btn-sm btn-outline-primary">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link href="/services" className="btn btn-primary">
                See all services
              </Link>
            </div>
          </div>
        </section>

        {/* How we work teaser */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <p className="section-kicker mb-2">Clear process</p>
                <h2 className="fw-bold mb-3">How We Work</h2>
                <p className="text-muted mb-4">
                  We start with discovery, then plan in clear milestones. You get
                  working software in short cycles with regular feedback — no
                  black boxes, no surprise scope.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span> Discovery &
                    alignment
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span> Transparent
                    planning
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span> Iterative
                    delivery
                  </li>
                  <li>
                    <span className="text-primary me-2">✓</span> Launch &
                    support
                  </li>
                </ul>
                <Link href="/services" className="btn btn-outline-primary mt-2">
                  Our process in detail
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="bg-white rounded-3 p-4 shadow-sm border">
                  <blockquote className="mb-0">
                    <p className="fst-italic text-muted mb-3">
                      &ldquo;They understood our domain quickly and delivered a
                      solution that our team actually uses. No fluff, just
                      results.&rdquo;
                    </p>
                    <footer className="small">
                      <strong>— Client feedback</strong>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / trust */}
        <section className="py-5">
          <div className="container">
            <p className="section-kicker text-center mb-2">Why clients choose us</p>
            <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
            <div className="row g-4">
              <div className="col-md-4 text-center">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fw-bold">
                    —
                  </div>
                  <h5 className="h6 fw-bold">Direct communication</h5>
                  <p className="small text-muted mb-0">
                    You work with the people who build — no endless account
                    managers.
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fw-bold">
                    —
                  </div>
                  <h5 className="h6 fw-bold">Modern stack</h5>
                  <p className="small text-muted mb-0">
                    Proven, maintainable technologies so your product stays fast
                    and updatable.
                  </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3 fw-bold">
                    —
                  </div>
                  <h5 className="h6 fw-bold">Outcome-focused</h5>
                  <p className="small text-muted mb-0">
                    We care about your goals — launch, revenue, efficiency — not
                    just code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-5 bg-primary">
          <div className="container text-center py-3">
            <h2 className="h3 fw-bold mb-3">Ready to Start?</h2>
            <p className="opacity-90 mb-4">
              Tell us about your project. We respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
