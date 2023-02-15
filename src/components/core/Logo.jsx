import React from "react";
import Link from "@/components/core/Link";
import Image from "next/image";

const Logo = ({ src, width, height, ...rest }) => {
  return (
    <Link className="navbar-brand" href="/" {...rest}>
      <Image
        src={src}
        width={src.width}
        height={src.height}
        alt="Brand Image"
        className="logo-image"
        priority
        as="image"
      />
    </Link>
  );
};

export default Logo;
