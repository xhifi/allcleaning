const CardLayout = ({ children, gutter, cols = [] }) => {
  const [def, sm, md, lg] = cols;
  return (
    <div className="container-fluid px-5 py-4">
      <div
        className={`row row-cols-${def || 1} row-cols-sm-${
          sm || 1
        } row-cols-md-${md || 3} row-cols-lg-${lg || 4} g-${gutter}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
