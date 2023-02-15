import Link from "../core/Link";

const SocialIcons = ({ data }) => {
  return (
    <ul className="list-unstyled d-flex align-items-center ms-auto mb-0">
      {data.map((v, i) => {
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
  );
};

export default SocialIcons;
