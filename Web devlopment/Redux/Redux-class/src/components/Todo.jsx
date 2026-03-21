import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleDone = (id) => {
    console.log(id);
    dispatch(markAsDone(id));
  };
  return (
    <div>
      <AddForm />
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleDone(todo.id)}>Task Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
