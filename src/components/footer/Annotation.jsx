import Icon from "../core/Icon";
import Link from "../core/Link";

export default function Annotations({ developer, platform }) {
  return (
    <div className="container-fluid annotations px-5 py-1 bg-light bg-gradient text-center">
      {developer && (
        <p className="mb-0">
          Made by <Link href={developer?.url}>{developer?.name}</Link>
        </p>
      )}
      {platform && (
        <p className="mb-0">
          in{" "}
          <Link href={platform?.url}>
            <Icon name={platform?.icon} />
            {platform.name}
          </Link>
        </p>
      )}
    </div>
  );
}
