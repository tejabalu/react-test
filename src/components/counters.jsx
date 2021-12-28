import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 34 },
			{ id: 3, value: 42 },
			{ id: 4, value: 7 },
			{ id: 5, value: 90 },
		],
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
				>
					<h3>Reset</h3>
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.handleDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
