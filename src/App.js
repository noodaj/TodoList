import { Form } from "./components/form.js";
import { TodoList } from "./components/todoList.js";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {	
	const parsed = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
	
	//using useState to change the array todos, and the function setTodos to update Todos when some state changes
	const [todos, setTodos] = useState(parsed);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	
	return (
		<div className="App">
			<h1>Todo List</h1>
			{/*creating the form and list*/}
			<Form todos={todos} setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos}></TodoList>
		</div>
	);
}

export default App;
