import React from "react";

const Todo = props => {
	console.log("TodoPROPS", props);

	const handleClick = () => {
		props.toggleCompleted(props.todo.id);
	};

	return (
		<div
			onClick={handleClick}
			className={`task${props.todo.completed ? " completed" : ""}`}
		>
			<p>{props.todo.name}</p>
		</div>
	);
};

export default Todo;
