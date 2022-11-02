import React, { useState } from "react";

function TodoElement ({ todo, todos, setTodos}) {
	//destructure 
	const {text, completed, id, priority} = todo;

	let priorities = [
		{ value: "Low", text: "Low" },
		{ value: "Medium", text: "Medium" },
		{ value: "High", text: "High" },
	];

	const [curPriority, setNewPriority] = useState(priority);

	//function to change priority
	//maps todo to reflect the new priority
	//set the curPriority to the target 
	let changePriority = (e) => {
		setTodos(
			todos.map(el =>{
				if(el.id === todo.id){
					return {...el, priority: e.target.value}
				}
				return el
			})
		)
		setNewPriority(todo.priority = e.target.value);
	}
	
	//if the task is complete, filter through all todos and set that todo's complete state to the opposite
	let setComplete = () => {
		setTodos(
			todos.map((el) => {
				if (el.id === id) {
					return { ...el, completed: !completed };
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
		<div className="todoElement" data-testid="todoElement">
			<h3 className={`${todo.completed ? "element-name-completed" : "element-name"}`}>{text}</h3>
			<div className="element-button">
				<select value={curPriority} onChange = {changePriority}>
					{priorities.map((el) => (
						<option key = {el.value} value = {el.value}>{el.text}</option>
					))}
				</select>
				<button onClick={setComplete}>
					Completed
				</button>
				<button onClick={removeElement} className="element-incomplete">
					Delete To Do
				</button>
			</div>
		</div>
	);
};

export default TodoElement