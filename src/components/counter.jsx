import React, { Component } from "react";

class Counter extends React.Component {
	// we dont need a local state anymore as we are converting this to a controlled component
	// state = {
	// 	count: this.props.counter.value,
	// 	tags: ["tag1", "tag2", "tag3"],
	// };

	formatCount() {
		return this.props.counter.value === 0
			? "zero"
			: this.props.counter.value;
	}

	styles = {
		fontSize: "20px",
		fontWeight: "bold",
	};

	zeroWarn() {
		return this.props.counter.value === 0 ? "warning" : "primary";
	}

	renderTags() {
		return this.props.counter.tags.length === 0 ? (
			<p>there are no tags</p>
		) : (
			<ul>
				{this.props.counter.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	handleIncrement = (product) => {
		console.log(product);
		this.setState({ count: this.props.counter.value + 1 });
	};

	handleDecrement = () => {
		this.setState({ count: this.props.counter.value - 1 });
	};

	render() {
		{
			console.log(this.props);
		}
		return (
			<React.Fragment>
				<span
					style={this.styles}
					className={"btn m-2 btn-" + this.zeroWarn()}
				>
					{this.formatCount()}
				</span>
				<button
					onClick={() => {
						this.props.onIncrement(this.props.counter);
					}}
					onAuxClick={() => {
						this.props.onDecrement(this.props.counter);
					}}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<button
					onClick={() => {
						this.props.onDelete(this.props.counter.id);
					}}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
				<h3>
					{this.props.counter.tags.length === 0 &&
						"Please create new tasks"}
				</h3>
				{this.renderTags()}
			</React.Fragment>
		);
	}
}

export default Counter;
