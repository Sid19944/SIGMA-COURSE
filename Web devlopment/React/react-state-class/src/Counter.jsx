import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  function incCountx() {
    setCountx((currCount) => currCount + 1);
  }
  function incCounty() {
    setCounty((currCount) => currCount + 1);
  }

  useEffect(() => {
    console.log("this is a side-effect");
  }, [countx]);
  return (
    <div>
      <h3>count = {countx}</h3>
      <button onClick={incCountx}>count</button>
      <h3>count = {county}</h3>
      <button onClick={incCounty}>count</button>
    </div>
  );
}
