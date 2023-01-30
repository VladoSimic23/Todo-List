import { render, fireEvent, screen } from "@testing-library/react";
import SingleTodo from "../SingleTodo";

describe("SingleTodo component", () => {
  const task = "Test task";
  const deleteTodo = jest.fn();
  const toggleCompleted = jest.fn();

  it("renders the task and buttons correctly", () => {
    render(
      <SingleTodo
        index={0}
        completed={false}
        task={task}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    );

    const taskElement = screen.getByText(task);
    expect(taskElement).toBeDefined();

    const completeButton = screen.getByText("Complete");
    expect(completeButton).toBeDefined();

    fireEvent.click(completeButton);
    expect(toggleCompleted).toHaveBeenCalledWith(0);
  });

  it("shows the correct buttons based on completion status", () => {
    render(
      <SingleTodo
        index={0}
        completed={true}
        task={task}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    );

    const uncompleteButton = screen.getByText("Uncomplete");
    expect(uncompleteButton).toBeDefined();

    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeDefined();

    fireEvent.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalledWith(0);
  });
});
