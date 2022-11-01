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

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	

	return (
		<div className="App">
			<h1>Todo List</h1>
			{/*creating the form and list*/}
			<Form todos={todos} setTodos={setTodos} setStatus = {setStatus}/>
			<TodoList todos={todos} setTodos={setTodos} statusTodo={statusTodo}></TodoList>
		</div>
	);
}

export default App;
