import React, { Component } from "react";
import UserCreate from "./components/UserCreate";

class App extends Component {
	state = { language: "english" };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className='App ui container'>
				<h1>
					Select language:
					<i
						className='large flag uk'
						onClick={() => this.onLanguageChange("english")}
					/>
					<i
						className='large flag es'
						onClick={() => this.onLanguageChange("spanish")}
					/>
				</h1>
				{this.state.language}

				<UserCreate />
			</div>
		);
	}
}

export default App;
