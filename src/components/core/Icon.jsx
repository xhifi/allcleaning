import React from "react";

const Icon = ({ name, size, ...rest }) => {
  return (
    <i
      style={size && { fontSize: size }}
      {...rest}
      className={`bi bi-${name} ${rest.className}`}
    ></i>
  );
};

export default Icon;
