"use client";

export function FloatingActions() {
  const phoneNumber = "+918851335509";
  const whatsappNumber = "918851335509";
  const whatsappMessage = encodeURIComponent(
    "Hi Optimal IT Solution, I'd like to know more about your services."
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="floating-actions floating-actions-left">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-whatsapp"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.94 9.94 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-9.84-10.01-9.84Zm5.86 14.3c-.25.7-1.23 1.28-2 1.44-.55.11-1.26.2-3.66-.78-3.07-1.27-5.05-4.4-5.2-4.6-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.6-.38.8-.38h.58c.19 0 .43-.07.68.52.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2.01 1.12.99 2.05 1.3 2.35 1.45.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.77.83 2.08 .98.31.15.51.23.59.35.08.13.08.75-.17 1.45Z" />
          </svg>
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="floating-btn floating-btn-call"
          aria-label="Call us"
          title="Call us"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
        </a>
      </div>

      <div className="floating-actions floating-actions-right">
        <button
          type="button"
          onClick={scrollToTop}
          className="floating-btn floating-btn-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 5.5 5.5 12l1.42 1.42L11 9.33V19h2V9.33l4.08 4.09L18.5 12 12 5.5Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
