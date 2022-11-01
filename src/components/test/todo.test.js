import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../todoList";

const mocktodoElement = jest.fn();
jest.mock("../todo", () => (props) => {
    const {todo} = props;
    const {text, key, priority} = todo;
	mocktodoElement({text, key, priority});
	return <mock-component></mock-component>
});

const ex = [
    { text: "wash dishes", key: 1, completed: false, priority: "High" },
    { text: "do laundry", key: 2, completed: false, priority: "Low" },
    { text: "do homework", key: 3, completed: true, priority: "High" },
];

let todo = {
    text: "wash dishes",
    key: 1,
    completed: false,
};

const todos = [todo]
test("render todo component", () => {
	render(<TodoList todos={todos} setTodos></TodoList>);
	expect(mocktodoElement).toHaveBeenCalledWith(
        expect.objectContaining({
            text: "wash dishes",
            key: 1,
            completed: false,
        })
	);
});
