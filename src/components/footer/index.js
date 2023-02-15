import Logo from "../core/Logo";
import BrandImage from "../../../public/brand.svg";
import UL from "../core/UnorderedList";

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

export default function FooterComponent() {
  return (
    <div className="container-fluid px-5 py-4 bg-warning">
      <div className="row row-cols-4">
        <div className="col">
          <Logo src={BrandImage} height={30} width={BrandImage.width / 3} />
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
  );
}
