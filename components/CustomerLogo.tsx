"use client";

import { useState } from "react";

type CustomerLogoProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export function CustomerLogo({ src, fallbackSrc, alt }: Readonly<CustomerLogoProps>) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={alt}
      width={40}
      height={40}
      className="rounded-circle border bg-white object-fit-contain"
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
        }
      }}
    />
  );
}
