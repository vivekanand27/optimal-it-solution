import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-5">
            <h6 className="fw-bold text-uppercase mb-3">Optimal IT Solution</h6>
            <p className="small text-muted mb-3" style={{ maxWidth: "24rem" }}>
              We build and sell software that helps businesses grow. Custom
              solutions, web apps, and consulting.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Start your project
            </Link>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link href="/" className="text-muted text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-muted text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-muted text-decoration-none">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-muted text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5">
            <h6 className="fw-bold text-uppercase mb-3">Get in Touch</h6>
            <a
              href="mailto:optimalitsolution26@gmail.com"
              className="text-muted text-decoration-none small d-block mb-2"
            >
              optimalitsolution26@gmail.com
            </a>
            <a
              href="tel:+918851335509"
              className="text-muted text-decoration-none small d-block mb-2"
            >
              8851335509
            </a>
            <p className="small text-muted mb-0">
              Kabir Nagar, Raipur, Chhattisgarh 492099
            </p>
          </div>
        </div>
        <hr className="opacity-25" />
        <p className="small text-muted text-center mb-0">
          &copy; {new Date().getFullYear()} Optimal IT Solution ·
          optimalitsolution.com
        </p>
      </div>
    </footer>
  );
}
