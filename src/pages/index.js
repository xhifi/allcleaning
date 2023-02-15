import Card from "@/components/core/card";

import MainLayout from "@/components/layouts/Main";

const cardsData = [
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

export default function Home() {
  return (
    <MainLayout>
      <Card cardData={cardsData} />
    </MainLayout>
  );
}
