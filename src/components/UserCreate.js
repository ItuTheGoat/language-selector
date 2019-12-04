import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = () => {
	return (
		<div className='ui card '>
			<div className='content'>
				<Field />
			</div>
			<div className='extra content'>
				<Button />
			</div>
		</div>
	);
};

export default UserCreate;
