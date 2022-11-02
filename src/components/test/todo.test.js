import React from "react";
import { render } from "@testing-library/react";
import { TodoList } from "../todoList";

//very simple test 

const mocktodoElement = jest.fn();
jest.mock("../todo", () => (props) => {
	mocktodoElement(props);
	return <mock-Child></mock-Child>;
});

let todo = {
	text: "wash dishes",
	id: 1,
	priority: "High",
};

let todos = [todo];

test("render basic component", () => {
	render(
		<TodoList todos={todos} setTodos statusTodo={todos}></TodoList>
	);
	expect(mocktodoElement).toHaveBeenCalledWith(
		expect.objectContaining({
			setTodos: true,
			todo: expect.objectContaining({
				text: "wash dishes",
				id: 1,
				priority: "High",
			}),
			todos: expect.arrayContaining([todo]),
		})
	);
});
