import React from "react";
import Logo from "../core/Logo";
import SocialIcons from "./SocialIcons";

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
      <SocialIcons data={mockList} />
    </div>
  );
};

export default UpperNav;
