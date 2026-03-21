import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
    id: uuidv4(),
  });

  let handleInputChange = (event) => {
    setFormData((curr) => {
      return {
        ...curr,
        [event.target.name]: event.target.value,
      };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addNewComment(formData);
    setFormData({
      username: "",
      remark: "",
      rating: 5,
      id: uuidv4(),
    });
  };

  useEffect(function print() {
    console.log("this is a side-effect");
  });

  return (
    <div>
      <h4>Give Commentns</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username</label>
        <br />
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={formData.username}
          name="username"
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <label htmlFor="remark">Enter Remarks</label>
        <br />
        <textarea
          name="remark"
          id="remark"
          value={formData.remark}
          placeholder="Enter few Remarks"
          onChange={handleInputChange}
          required
          rows={8}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Enter Rating</label>
        <br />
        <input
          type="number"
          id="rating"
          name="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
