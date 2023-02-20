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
      <Card cardData={cardsData} cols={[1, undefined, 4, 6]} gutter="5" />

      {featureMock.map((item, i) => {
        return (
          <Featured
            img={item.img}
            btn={item.btn}
            title={item.title}
            className={item.className}
            content={item.content}
          >
            {item.children}
          </Featured>
        );
      })}
    </MainLayout>
  );
}

const featureMock = [
  {
    img: {
      src: "https://plus.unsplash.com/premium_photo-1661320897741-0924d7b88078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      quality: "70",
      fill: "cover",
      className: "rounded-5 shadow-lg border-3 border border-white",
    },
    btn: {
      action: "/",
      text: "Home",
      icon: "airplane",
      className: "btn btn-lg btn-light btn-shadow",
    },
    title: "My Featured Content",
    className: "bg-warning",
  },
  {
    // img: {
    //   src: "https://images.unsplash.com/photo-1676583821205-b9f79e3ca783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    //   quality: "70",
    //   fill: "cover",
    //   className: "rounded-5 shadow-lg border-3 border border-white",
    //   position: "left",
    // },
    btn: {
      action: "/",
      text: "Home",
      icon: "airplane",
      className: "btn btn-lg btn-light btn-shadow",
    },
    title: "My Featured Content",
    className: "bg-warning",
    content: (
      <div>
        <p>This be the naughty naughty tickle ticklish</p>
        <hr />
      </div>
    ),
  },
  {
    img: {
      src: "https://images.unsplash.com/photo-1612971446746-b79cc11824f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      quality: "70",
      fill: "cover",
      className: "rounded-5 shadow-lg border-3 border border-white",
    },
    btn: {
      action: "/",
      text: "Home",
      icon: "airplane",
      className: "btn btn-lg btn-light btn-shadow",
    },
    title: "My Featured Content",
    className: "bg-warning",
  },
  {
    img: {
      src: "https://images.unsplash.com/photo-1612971446746-b79cc11824f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      quality: "70",
      fill: "cover",
      className: "rounded-5 shadow-lg border-3 border border-white",
    },
    btn: {
      action: "/",
      text: "Home",
      icon: "airplane",
      className: "btn btn-lg btn-light btn-shadow",
    },
    title: "My Featured Content",
    className: "bg-warning",
  },
];
