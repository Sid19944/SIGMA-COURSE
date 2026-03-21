import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    if (task != "") {
      dispatch(addTodo(task));
    }
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
      />
      <button>Add Task</button>
    </form>
  );
}
