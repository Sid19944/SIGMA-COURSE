import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Enter Full Name</label>
      <input
        placeholder="Enter Full Name"
        value={formData.fullName}
        name="fullName"
        id="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">Enter username</label>
      <input
        placeholder="Enter username"
        value={formData.username}
        name="username"
        id="username"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="password">Enter password</label>
      <input
        placeholder="Enter password"
        value={formData.password}
        name="password"
        id="password"
        onChange={handleInputChange}
      />
      <button>submit</button>
    </form>
  );
}
