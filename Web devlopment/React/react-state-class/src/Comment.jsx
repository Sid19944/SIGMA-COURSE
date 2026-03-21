import { useState } from "react";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comment, setComment] = useState([]);

  let addNewComment = (newComment) => {
    setComment((curr) => [...curr, newComment]);
  };

  let delComment = (id) => {
    setComment(comment.filter((prevComments) => prevComments.id != id));
  };

  let styles = {
    border: "1px solid red",
    borderRadius: "15px",
    padding: "20px",
    marginBottom: "10px",
  };

  return (
    <div>
      <CommentsForm addNewComment={addNewComment} />
      <br />
      <hr />
      <h3>All Comments</h3>
      <div className="comment">
        {comment.map((c) => (
          <div key={c.id} style={styles}>
            <span>{c.remark}</span>
            <br />
            <span>Rating : {c.rating}</span>
            <br />
            <p>User : {c.username}</p>
            <br />
            <button onClick={() => delComment(c.id)}>del</button>
          </div>
        ))}
      </div>
    </div>
  );
}
