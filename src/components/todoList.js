import React from "react";
import TodoElement  from "./todo";

export let TodoList = ({ todos, setTodos, statusTodo }) => {
	//map each todo to a todo element 
	return (
		<div className="todoList">
			{statusTodo.map((todo) => (
				<TodoElement
					todo={todo}
					key={todo.id}
					setTodos={setTodos}
					todos={todos}
				></TodoElement>
			))}
		</div>
	);
};
