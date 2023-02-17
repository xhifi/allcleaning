import NLink from "next/link";
import Icon from "./Icon";

export default function Link({ children, href = "", icon, ...rest }) {
  if (!href.startsWith("/")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        {...rest}
        className={rest.className}
      >
        {icon ? (
          <>
            <Icon name={icon} /> {children}
          </>
        ) : (
          children
        )}
      </a>
    );
  }
  return (
    <NLink href={href} {...rest} className={rest.className}>
      {icon ? (
        <>
          <Icon name={icon} /> {children}
        </>
      ) : (
        children
      )}
    </NLink>
  );
}
