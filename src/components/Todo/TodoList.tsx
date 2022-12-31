import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import SingleTodo from "./SingleTodo";
import styles from "../style/todos.module.css";

// todo object type check
export interface TodoI {
  task: string;
  completed: boolean;
}
// check all props passed to SingleTodo component
export interface TodoAllPropsI {
  index: number;
  task: string;
  completed: boolean;
  deleteTodo: (index: number) => void;
  toggleCompleted: (index: number) => void;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoI[]>(() => {
    // Conditional Check to avoid Syntax Error: JSON.parse when clearing browser data
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos") || "");
    }
    return [];
  });

  useEffect(() => {
    // add todo to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // delete todo based on index
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // toggle boolean "Completed" based on index
  const toggleCompleted = (index: number) => {
    const newTodos = [...todos];
    if (newTodos[index].completed === true) {
      newTodos[index].completed = false;
      setTodos(newTodos);
    } else {
      newTodos[index].completed = true;
      setTodos(newTodos);
    }
  };

  return (
    <div className={styles.container}>
      <AddTodo todos={todos} setTodos={setTodos} />
      <div className={styles.grid}>
        <div className={styles.notCompleted}>
          <h1>Not Completed</h1>
          {todos.length > 0 &&
            todos.map((todo, index) => {
              const { completed, task } = todo;

              return (
                <div key={index}>
                  {!completed && (
                    // Returns only Not Completed todo items
                    <SingleTodo
                      key={index}
                      index={index}
                      completed={completed}
                      task={task}
                      deleteTodo={deleteTodo}
                      toggleCompleted={toggleCompleted}
                    />
                  )}
                </div>
              );
            })}
        </div>

        <div className={styles.completed}>
          <h1>Completed</h1>
          {todos.length > 0 &&
            todos.map((todo, index) => {
              const { completed, task } = todo;

              return (
                <div key={index}>
                  {completed && (
                    // Returns only Completed todo items
                    <SingleTodo
                      key={index}
                      index={index}
                      completed={completed}
                      task={task}
                      deleteTodo={deleteTodo}
                      toggleCompleted={toggleCompleted}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
