import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
	// add a property directly to the class.
	// An alternate way of doing this would be 'Button.contextType = LanguageContext
	static contextType = LanguageContext; // contextType is a set variable name

	render() {
		const btnText = this.context === "english" ? "Submit" : "Enviar";

		return <button className='ui primary button'>{btnText}</button>;
	}
}

export default Button;
