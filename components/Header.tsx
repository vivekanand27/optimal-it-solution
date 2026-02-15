import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 py-0" href="/">
          <Image
            src="/logo.png"
            alt="Optimal IT Solution"
            width={180}
            height={44}
            className="d-block"
            style={{ maxHeight: "44px", width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
