import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColourContext from "./contexts/ColourContext";

class App extends React.Component {
	state = { language: "english" };

	onLanguageChange = language => {
		this.setState({ language });
	};

	// We use the context provider which allows us to change the value and to pass it through from our App comp which is the source

	render() {
		let heading =
			this.state.language === "english"
				? "Select Language: "
				: "Seleccione el idioma: ";

		return (
			<div className='App ui container'>
				<h1>
					{heading}
					<i
						className='large flag uk'
						onClick={() => this.onLanguageChange("english")}
					/>
					<i
						className='large flag es'
						onClick={() => this.onLanguageChange("spanish")}
					/>
				</h1>

				<LanguageContext.Provider value={this.state.language}>
					<ColourContext.Provider value='red'>
						<UserCreate />
					</ColourContext.Provider>
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;
