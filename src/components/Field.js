import React from "react";

const Field = () => {
	return (
		<form className='ui form'>
			<h3 className='ui dividing header'>Name</h3>
			<div className='field'>
				<input type='text' placeholder='Enter name'></input>
			</div>
		</form>
	);
};

export default Field;
