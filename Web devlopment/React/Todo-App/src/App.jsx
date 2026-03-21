import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import DeleteBtn from "./DeleteBtn";

function App() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    if (newTodo != "") {
      setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
      setNewTodo("");
    }
  };

  let todoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let delLi = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let allDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let doneTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={todoValue} />
      <button onClick={addTask}>Add</button>
      <br />

      <h2>Tasks todo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span> &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => delLi(todo.id)}>delete</button>
            <button onClick={() => doneTask(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={allDone}>All Done</button>
    </div>
  );
}

export default App;
