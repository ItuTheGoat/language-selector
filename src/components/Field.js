import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
	static contextType = LanguageContext;

	render() {
		const headText = this.context === "english" ? "Name" : "Nombre";
		const placeholderText =
			this.context === "english" ? "Enter name" : "Ingrese su nombre";

		return (
			<form className='ui form'>
				<h3 className='ui dividing header'>{headText}</h3>
				<div className='field'>
					<input type='text' placeholder={placeholderText}></input>
				</div>
			</form>
		);
	}
}

export default Field;
