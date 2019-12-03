// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
	return (
		<div>
			{props.task.map(todo => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleCompleted={props.toggleCompleted}
					clearTask={props.clearTask}
				/>
			))}
			<button onClick={props.clearTask}>Clear Task</button>
		</div>
	);
};

export default TodoList;
