import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
	render() {
		const { counters, onDelete, onIncrement, onDecrement } = this.props;
		return (
			<div>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						counter={counter}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;

// counters component is also a controlled component now
