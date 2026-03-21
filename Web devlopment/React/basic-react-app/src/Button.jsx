function printHello() {
  console.log("Hello!");
}
function handleHover() {
  console.log("You hover the para!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={handleHover}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        quibusdam perspiciatis autem expedita ut ipsa beatae voluptas, inventore
        possimus suscipit fuga eaque veritatis voluptatum nam maxime provident,
        amet non. Voluptas!
      </p>
    </div>
  );
}
