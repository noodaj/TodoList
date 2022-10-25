import React from "react";
import { TodoElement } from "./todo";

export let TodoList = ({ todos, setTodos }) => {
	return (
		<div className="todoList">
			{todos.map((todo) => (
				<TodoElement
					text={todo.text}
					key={todo.id}
					todo={todo}
					setTodos={setTodos}
					todos={todos}
					priority={todo.priority}
				></TodoElement>
			))}
		</div>
	);
};
