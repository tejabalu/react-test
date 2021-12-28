import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		count: this.props.counter.value,
		tags: ["tag1", "tag2", "tag3"],
	};

	formatCount() {
		return this.state.count === 0 ? "zero" : this.state.count;
	}

	styles = {
		fontSize: "20px",
		fontWeight: "bold",
	};

	zeroWarn() {
		return this.state.count === 0 ? "warning" : "primary";
	}

	renderTags() {
		return this.state.tags.length === 0 ? (
			<p>there are no tags</p>
		) : (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	handleIncrement = (product) => {
		console.log(product);
		this.setState({ count: this.state.count + 1 });
	};

	handleDecrement = () => {
		this.setState({ count: this.state.count - 1 });
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
					onClick={(e) => {
						this.handleIncrement(e);
					}}
					onAuxClick={this.handleDecrement}
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
					{this.state.tags.length === 0 && "Please create new tasks"}
				</h3>
				{this.renderTags()}
			</React.Fragment>
		);
	}
}

export default Counter;
