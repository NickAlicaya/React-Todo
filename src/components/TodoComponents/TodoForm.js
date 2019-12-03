import React from "react";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTask: ""
		};
	}

	handleChanges = e => {
		this.setState({ newTask: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addTask(this.state.newTask);
		this.setState({
			newTask: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					value={this.state.newTask}
					onChange={this.handleChanges}
					type="text"
					name="todo"
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
