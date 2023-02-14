import React from "react";
import Link from "../core/Link";

const LowerNav = () => {
  const mockList = [
    { text: "Home", path: "/", icon: "" },
    { text: "About Us", path: "/about", icon: "" },
    { text: "Contact Us", path: "/contact", icon: "" },
    { text: "Blog", path: "/blog", icon: "" },
  ];
  return (
    <div className="container-fluid px-5 py-0 bg-dark">
      <ul className="mb-0 list-unstyled d-flex align-items-center py-2">
        {mockList.map((v, i) => {
          return (
            <li key={i}>
              <Link href={v.path} className="btn btn-sm btn-primary me-2">
                {v.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LowerNav;
