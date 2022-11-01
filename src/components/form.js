import React, { useRef } from "react";

export const Form = ({ setTodos, todos, setStatus }) => {
	let newTodo = useRef();
	let TodoPrio = useRef();

	//get new todo from user
	let getInput = (e) => {
		e.preventDefault();
		if (newTodo.current.value === "") {
			return;
		}
		if (todos.find(({ text }) => text === newTodo.current.value)) {
			newTodo.current.value = "";
			return;
		}
		setTodos([
			...todos,
			{
				text: newTodo.current.value,
				completed: false,
				id: Math.ceil(Math.random() * 1000),
				priority: TodoPrio.current.value,
			},
		]);

		newTodo.current.value = "";
	};

	let changeStatus = (e) => {
		setStatus(e.target.value);
	}
	return (
		<>
			<form className="input-form">
				<h2>Add Todo</h2>
				<div className="prioritySelector">
					<input
						ref={newTodo}
						type="text"
						placeholder="Add todo"
						className="input-text"
					></input>
					<select ref={TodoPrio}>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>
					<select onChange = {changeStatus}>
						<option value="All">All</option>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>

					<button onClick={getInput} className="todo-button">
						Submit
					</button>
				</div>
			</form>
		</>
	);
};
