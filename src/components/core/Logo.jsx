import React from "react";
import Link from "@/components/core/Link";
import Image from "next/image";

const Logo = ({ src, width, height, ...rest }) => {
  return (
    <Link className="navbar-brand" href="/" {...rest}>
      <Image
        src={src.src}
        width={width || src.width}
        height={height || src.height}
        alt="Brand Image"
      />
    </Link>
  );
};

export default Logo;
