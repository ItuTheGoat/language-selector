import React, { Component } from "react";
import UserCreate from "./components/UserCreate";

class App extends Component {
	render() {
		return (
			<div className='App ui container'>
				<h1>Select language: </h1>
				<UserCreate />
			</div>
		);
	}
}

export default App;
