const CardLayout = ({ children }) => {
  return (
    <div className="container-fluid px-5 py-4">
      <div class="row row-cols-1 row-cols-md-4 g-4">{children}</div>
    </div>
  );
};

export default CardLayout;
