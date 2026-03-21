import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  return (
    <div className="ProductTab" style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Asus Laptop" idx={2} />
      <Product title="IQOO 15" idx={3} />
    </div>
  );
}

export default ProductTab;
