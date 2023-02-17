import Card from "@/components/card";
import Featured from "@/components/featured";

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

const singleObjectData = {
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
};

export default function Home() {
  return (
    <MainLayout>
      <Card cardData={cardsData} cols={[1, , 4, 6]} gutter="5" />
      <Featured
        img={{
          src: "https://plus.unsplash.com/premium_photo-1661320897741-0924d7b88078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          quality: "70",
          fill: "cover",
          className: "rounded-5 shadow-lg border-3 border border-white",
        }}
        btn={{
          action: "/",
          text: "Home",
          icon: "airplane",
          className: "btn btn-lg btn-light btn-shadow",
        }}
        title="My Featured Content"
        className="bg-warning"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad veniam
        cupiditate, quibusdam id dicta excepturi saepe aut pariatur, laudantium,
        iure unde adipisci suscipit harum consequuntur debitis recusandae
        dolorem et incidunt nam aperiam sed omnis illo? Nam quisquam itaque
        veritatis, nihil nobis doloribus reiciendis odit nulla debitis ipsum
        eaque neque quod!
      </Featured>
    </MainLayout>
  );
}
