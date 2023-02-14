import LowerNav from "./LowerNav";
import UpperNav from "./UpperNav";

export default function Navigation() {
  return (
    <div className="container-fluid px-0 py-0">
      <UpperNav />
      <LowerNav />
    </div>
  );
}
