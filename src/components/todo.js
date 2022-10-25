import React, { useState } from "react";

export let TodoElement = ({ text, priority, todo, todos, setTodos }) => {
	const priorities = [
		{ value: "Low", text: "Low" },
		{ value: "Medium", text: "Medium" },
		{ value: "High", text: "High" },
	];

	const [curPriority, setNewPriority] = useState(priority);

	console.log(curPriority);
	let changePriority = (e) => {
		setNewPriority(e.target.value);
	}
	
	//if the task is complete, filter through all todos and set that todo's complete state to the opposite
	let setComplete = () => {
		setTodos(
			todos.map((el) => {
				if (el.id === todo.id) {
					return { ...el, completed: !todo.completed };
				}
				return el;
			})
		);
	};

	//if we want to remove the task, filter through the todos and remove it
	let removeElement = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	return (
		<div className="todoElement">
			<h3 className="element-name">{text}</h3>
			<div className="element-button">
				<select onChange={changePriority} value={curPriority}>
					{priorities.map(el => {
						<option key={el.value} value={el.value}>
							{el.text}
						</option>
					})};
				</select>
				<button
					onClick={setComplete}
					className={todo.completed ? "element-complete" : ""}
				>
					Completed
				</button>
				<button onClick={removeElement} className="element-incomplete">
					Delete To Do
				</button>
			</div>
		</div>
	);
};
