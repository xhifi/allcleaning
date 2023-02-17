import Image from "next/image";
import Link from "../core/Link";

const Featured = ({ children, img, title, btn, ...rest }) => {
  if (!img) {
    return (
      <div className={"container-fluid px-5 py-4 " + rest.className}>
        <div className="px-5 text-center">
          <h2>{title}</h2>
          <p className={btn ? "" : "mb-0"}>{children}</p>
          {btn && (
            <Link
              className={"shadow bg-gradient " + btn.className}
              href={btn.action}
              icon={btn.icon}
            >
              {btn.text}
            </Link>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid px-5 py-4">
      <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-between px-0 px-md-5">
        <div className="col-12 px-0 col-md-6 mb-5 mb-md-0">
          <h3>{title}</h3>
          <p className={btn ? "" : "mb-0"}>{children}</p>
          <Link
            className={"shadow bg-gradient " + btn.className}
            href={btn.action}
            icon={btn.icon}
          >
            {btn.text}
          </Link>
        </div>
        <div className="px-0 col-12 col-md-5">
          <Image
            src={img.src}
            fill={img.fill || "contain"}
            style={{ transform: "rotate(3deg)" }}
            className={
              `position-relative ${img.className}` || "position-relative"
            }
            quality={img.quality || 30}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
