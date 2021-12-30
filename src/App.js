import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 4, tags: ["tag1", "tag2", "tag3"] },
			{ id: 2, value: 34, tags: ["tag7", "tag2", "tag3"] },
			{ id: 3, value: 42, tags: ["tag1", "tag2", "tag8"] },
			{ id: 4, value: 7, tags: ["tag1", "tag6", "tag3"] },
			{ id: 5, value: 90, tags: ["tag1", "tag2", "tag0"] },
		],
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		console.log(counter.id);
		const id = counters.id;
		counters[id] = counter;
		counters[id].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		console.log(counter.id);
		const id = counters.id;
		counters[id] = counter;
		counters[id].value--;
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter((c) => c.value > 0).length
					}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
