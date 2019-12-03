import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const task = [
	{
		name: "Buy groceries",
		id: 1,
		completed: true
	},
	{
		name: "Cook Dinner",
		id: 2,
		completed: false
	},
	{
		name: "Do dishes",
		id: 3,
		completed: false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			task: task,
			anotherTask: ""
		};
	}

	clearTask = () => {
		console.log("CLEARTask");
		this.setState({
			task: this.state.task.filter(todo => {
				return !todo.completed;
			})
		});
	};

	addTask = newTaskText => {
		console.log("NEWTask", newTaskText);
		const newTask = {
			name: newTaskText,
			id: Date.now(),
			completed: false
		};
		this.setState({
			task: [...this.state.task, newTask]
		});
	};

	render() {
		return (
			<div className="App">
				<div>
					<h2>Welcome to your Todo App!</h2>
					<TodoForm addTask={this.addTask} />
				</div>
				<div>
					<TodoList task={this.state.task} />
				</div>
			</div>
		);
	}
}

export default App;
