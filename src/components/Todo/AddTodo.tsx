import { useState } from "react";
import { TodoI } from "./TodoList";
import styles from "../style/todos.module.css";

const AddTodo = ({
  todos,
  setTodos,
}: {
  todos: TodoI[];
  setTodos: React.Dispatch<React.SetStateAction<TodoI[]>>;
}) => {
  const [task, setTask] = useState("");

  const addTodo = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (task) {
      const newTodo: TodoI = { task: task, completed: false };
      setTodos([...todos, newTodo]);
      setTask("");
    }
    return;
  };

  return (
    <div>
      <form className={styles.form} onSubmit={addTodo}>
        <label htmlFor="task">Type Something: </label>
        <input
          minLength={3}
          id="task"
          name="task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className={styles.btnPrimary} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
