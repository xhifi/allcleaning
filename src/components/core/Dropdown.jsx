import Link from "./Link";

const Dropdown = ({ children, menu, ...rest }) => {
  if (!menu) throw new Error("Provide valid data for dropdown");
  return (
    <>
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        {...rest}
      >
        {children}
      </a>
      <ul class="dropdown-menu">
        {menu.map((v, i) => {
          return (
            <li>
              <Link href={v.link} className="dropdown-item">
                {v.icon && <i class={`bi bi-${v.icon}`}></i>} {v.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
