import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Services | Optimal IT Solution",
  description:
    "Digital marketing, web & app development, SEO & PPC, social media management, and custom software. See how we can help your business.",
};

const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tag: "Reach & convert",
    description:
      "Data-driven campaigns to grow your audience and conversions. We plan, run, and optimize digital marketing so your brand gets seen and your goals get met.",
    points: ["Strategy & planning", "Campaign management", "Analytics & reporting"],
  },
  {
    id: "web-app-development",
    title: "Web & App Development",
    tag: "Web & mobile",
    description:
      "From responsive websites to full-stack web and mobile apps. We build with modern tech so you get fast, scalable products that users love.",
    points: ["Websites & web apps", "Mobile apps", "APIs & integrations"],
  },
  {
    id: "seo-ppc",
    title: "SEO & Pay Per Click Advertising",
    tag: "Search & ads",
    description:
      "Get found on search and control paid traffic. We handle SEO, Google Ads, and other PPC channels so you attract the right visitors and maximize ROI.",
    points: ["Search engine optimization", "Google Ads & PPC", "Keyword & conversion optimization"],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    tag: "Engage & grow",
    description:
      "Consistent presence and engagement on the platforms that matter. We create content, schedule posts, and manage communities so your brand stays top of mind.",
    points: ["Content creation & calendar", "Community management", "Performance tracking"],
  },
  {
    id: "custom-software",
    title: "Custom Software Solution",
    tag: "Built for you",
    description:
      "Tailored software that fits your workflows. Internal tools, dashboards, and automation that integrate with your systems and scale with your business.",
    points: ["Requirements & discovery", "Custom development", "Maintenance & support"],
  },
];

const process = [
  { step: 1, title: "Discovery", text: "We align on goals, scope, and success criteria." },
  { step: 2, title: "Plan & design", text: "Clear milestones and a plan you can track." },
  { step: 3, title: "Build & iterate", text: "Working software in short cycles with your feedback." },
  { step: 4, title: "Launch & support", text: "Deploy, document, and keep things running." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-primary text-white">
          <div className="container py-4">
            <h1 className="display-5 fw-bold">Our Services</h1>
            <p className="lead mb-0 opacity-90">
              Digital marketing, web & app development, SEO & PPC, social media
              management, and custom software — all under one roof.
            </p>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`row align-items-center g-4 py-4 ${
                  i > 0 ? "border-top" : ""
                }`}
              >
                <div className="col-lg-4">
                  <span className="badge bg-primary mb-2">{s.tag}</span>
                  <h2 className="h4 fw-bold">{s.title}</h2>
                </div>
                <div className="col-lg-5">
                  <p className="text-muted mb-3">{s.description}</p>
                  <ul className="list-unstyled mb-0 small">
                    {s.points.map((p, j) => (
                      <li key={j} className="mb-1">
                        <span className="text-primary me-2">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-3 text-lg-end">
                  <Link href="/contact" className="btn btn-outline-primary">
                    Discuss this
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center h4 fw-bold mb-5">How We Work</h2>
            <div className="row g-4">
              {process.map((p) => (
                <div key={p.step} className="col-6 col-lg-3">
                  <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100">
                    <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3 fw-bold">
                      {p.step}
                    </div>
                    <h5 className="h6 fw-bold">{p.title}</h5>
                    <p className="small text-muted mb-0">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container text-center">
            <p className="lead text-muted mb-4">
              Tell us about your project. We&apos;ll respond within 24 hours.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
