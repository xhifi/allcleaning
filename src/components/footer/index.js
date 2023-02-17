import Logo from "../core/Logo";
import BrandImage_light from "../../../public/brand_light.svg";
import UL from "../core/UnorderedList";
import Annotations from "./Annotation";

const mockData = [
  {
    title: "First Column",
    data: [
      { path: "/", text: "Home" },
      { path: "/about", text: "About" },
      { path: "/contact", text: "Contact" },
    ],
  },
  {
    title: "Second Column",
    data: [
      { path: "/", text: "Home" },
      { path: "/about", text: "About" },
      { path: "/contact", text: "Contact" },
    ],
  },
  {
    title: "Third Column",
    data: [{ path: "/", text: "Home" }, { text: "About" }, { text: "Contact" }],
  },
];

const mockDataAnnotations = {
  developer: {
    name: "Brainloggers",
    url: "https://www.brainloggers.co.uk",
    icon: "",
  },
  platform: {
    name: "NextJs",
    url: "https://www.nextjs.com",
    icon: "nextjs",
  },
};

export default function FooterComponent() {
  return (
    <>
      <div className="container-fluid px-5 py-4 bg-warning bg-dark text-white">
        <div className="row row-cols-4">
          <div className="col">
            <Logo src={BrandImage_light} fill="contain" />
          </div>
          {mockData.map((v, i) => {
            return (
              <div className="col" key={i}>
                <UL title={v.title} data={v.data}></UL>
              </div>
            );
          })}
        </div>
      </div>
      <Annotations
        developer={mockDataAnnotations.developer}
        platform={mockDataAnnotations.platform}
      />
    </>
  );
}
