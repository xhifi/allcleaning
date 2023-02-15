import Link from "./Link";

const UL = ({ title, data, className }) => {
  return (
    <>
      {title && <h4>{title}</h4>}
      <ul className={"mb-0 list-unstyled rendered-list " + className}>
        {data.map((v, i) => {
          if (!v.path) {
            return <li key={i}>{v.text}</li>;
          }
          return (
            <li key={i}>
              <Link href={v.path}>{v.text}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UL;
