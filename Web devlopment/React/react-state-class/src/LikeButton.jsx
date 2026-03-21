import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggle = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let style = {
    color: "red",
    fontSize: "xx-large",
  };

  return (
    <div>
      <p>Clicks : {clicks}</p>
      <p onClick={toggle}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={style}></i>
        ) : (
          <i
            className="fa-regular fa-heart"
            style={{ fontSize: "xx-large" }}
          ></i>
        )}
      </p>
    </div>
  );
}
