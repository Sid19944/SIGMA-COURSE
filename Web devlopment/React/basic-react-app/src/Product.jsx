import Price from "./price";
function Product({ title, idx }) {
  let oldPrice = ["12,999", "8,999", "5,999", "999"];
  let newPrice = ["9,999", "7,999", "5,499", "799"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["intuitive surface","Designed for iPad Pro"],
    ["Best for gamming","i7 14gen"],
    ["best under budget laptop","i5 14gen"],
  ];
 
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx].map((el)=><p>{el}</p>)}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
