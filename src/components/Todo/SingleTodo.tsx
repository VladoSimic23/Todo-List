import { TodoAllPropsI } from "./TodoList";
import styles from "../style/todos.module.css";

const SingleTodo = ({
  index,
  completed,
  task,
  deleteTodo,
  toggleCompleted,
}: TodoAllPropsI) => {
  return (
    <div>
      <div className={styles.todoItems}>
        <h2>
          <span>{index + 1}. </span>
          {task}
        </h2>
        {!completed && (
          <div>
            <button
              className={styles.btnGreen}
              onClick={() => toggleCompleted(index)}
            >
              Complete
            </button>
          </div>
        )}
        {completed && (
          <div>
            <button
              className={styles.btnRestore}
              onClick={() => toggleCompleted(index)}
            >
              Uncomplete
            </button>
            <button className={styles.btnRed} onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleTodo;
