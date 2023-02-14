import React from "react";
import Logo from "../core/Logo";
import Link from "../core/Link";

import BrandImage from "../../../public/brand.svg";

const mockList = [
  { icon: "airplane", path: "/" },
  { icon: "2-circle-fill", path: "https://www.google.com", text: "Second" },
  { path: "https://www.wikileaks.com", text: "Third" },
];

const UpperNav = () => {
  return (
    <div className="d-flex align-items-center py-3 px-5">
      <Logo src={BrandImage} height={30} width={BrandImage.width / 3} />
      <ul className="list-unstyled d-flex align-items-center ms-auto mb-0">
        {mockList.map((v, i) => {
          return (
            <li key={i}>
              <Link
                href={v.path}
                icon={v.icon}
                className="btn btn-sm btn-primary me-2"
              >
                {v.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpperNav;
