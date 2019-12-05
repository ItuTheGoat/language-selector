import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends Component {
	// add a property directly to the class.
	// An alternate way of doing this would be 'Button.contextType = LanguageContext
	// static contextType = LanguageContext; // contextType is a set variable name

	// When using a consumer to get the data from the provider, we do not need a context Type

	renderButton(colour) {
		return (
			<button className={`ui button ${colour}`}>
				<LanguageContext.Consumer>
					{value => (value === "english" ? "Submit" : "Enviar")}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		// const btnText = this.context === "english" ? "Submit" : "Enviar";

		return (
			<ColourContext.Consumer>
				{colour => this.renderButton(colour)}
			</ColourContext.Consumer>
		);
	}
}

export default Button;
