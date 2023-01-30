import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import AddTodo from "../AddTodo";

afterEach(cleanup);

describe("AddTodo component", () => {
  it("renders form and input elements", () => {
    render(<AddTodo todos={[]} setTodos={jest.fn()} />);
    expect(screen.getByLabelText("Type Something:")).toBeDefined();
    expect(screen.getByText("Add Todo")).toBeDefined();
  });

  it("adds todo item", () => {
    const setTodos = jest.fn();
    render(<AddTodo todos={[]} setTodos={setTodos} />);

    fireEvent.change(screen.getByLabelText("Type Something:"), {
      target: { value: "Test todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));

    expect(setTodos).toHaveBeenCalledWith([
      { task: "Test todo", completed: false },
    ]);
  });
});
