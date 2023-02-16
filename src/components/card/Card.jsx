import Link from "../core/Link";

const schemaMock = {
  link: {
    path: "/",
    text: "Home",
  },

  type: "with-image",
  img: {
    url: "https://bityl.co/HBCz",
    alt: "A Painting",
  },
  title: "My Custom Card",
  description: `This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.`,
};

const Card = ({ data, ...rest }) => {
  if (data.type === "with-image") {
    return (
      <Link
        href={data.link.path}
        className="text-decoration-none text-dark card-w-img"
      >
        <div className="col" {...rest}>
          <div className="card">
            <img
              src={data.img.url}
              className="card-img-top"
              alt={data.img.alt}
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  if (data.type === "with-icon") {
    return (
      <Link href={data.link.path} className="text-decoration-none text-dark">
        <div className="col card-w-icon">
          <div className="card">
            <div className="icon-block">
              <i className={`bi bi-${data.icon.name} card-icon text-white`}></i>
            </div>
            <div className="card-body">
              <h3 className="card-title">{data.title}</h3>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return;
};

export default Card;
