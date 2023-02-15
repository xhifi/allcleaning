import CardLayout from "./CardLayout";
import Card from "./Card";

const dataMock = [
  {
    type: "with-image",
    link: {
      path: "/",
      text: "Home",
    },
    img: {
      url: "https://bityl.co/HBCz",
      alt: "A Painting",
    },
    title: "My Custom Card",
    description: `This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`,
  },
  {
    type: "with-icon",
    link: {
      path: "/about",
      text: "About",
    },
    icon: {
      name: "airplane",
    },
    title: "My Icon Card",
    description: `Cool ass lookin icons`,
  },
];

export default function Cards() {
  return (
    <CardLayout>
      {dataMock.map((v, i) => {
        return <Card key={i} data={v} />;
      })}
    </CardLayout>
  );
}
