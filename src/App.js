import { Form } from "./components/form.js";
import { TodoList } from "./components/todoList.js";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {	
	const parsed = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
	
	//using useState to change the array todos, and the function setTodos to update Todos when some state changes
	const [todos, setTodos] = useState(parsed);
	const [status, setStatus] = useState("All");
	const [statusTodo, setStatusTodos] = useState(todos);
	
	//use effect to rerender app based on which priority is selected
	//also rerenders when the todos change so it reflects the new priority
	useEffect(() => {
		switch(status){
			case 'High':
				setStatusTodos(todos.filter(todo => todo.priority === "High"))
				break;
			case 'Medium':
				setStatusTodos(todos.filter(todo => todo.priority === "Medium"));
				break;
			case 'Low':
				setStatusTodos(todos.filter(todo => todo.priority === "Low"));
				break;
			default:
				setStatusTodos(todos);
				break;
		}
	},[status, todos]);

	//updates the local storage if the todos array is changed 
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	

	//render app 
	return (
		<div className="App">
			<h1>Todo List</h1>
			<Form todos={todos} setTodos={setTodos} setStatus = {setStatus}/>
			<TodoList todos={todos} setTodos={setTodos} statusTodo={statusTodo}></TodoList>
		</div>
	);
}

export default App;
