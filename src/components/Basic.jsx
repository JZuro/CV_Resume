import { useState } from "react";
import "./Basic.css";

export default function Basic({ handleNameChange, handleSurnameChange }) {
	return (
		<div className="basic">
			<h2>Basic info:</h2>
			<form>
				<label for="name">First name:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="your first name..."
					onChange={(e) => handleNameChange(e.target.value)}
				/>
				<label for="surname">Surname:</label>
				<input
					type="text"
					id="surname"
					name="surname"
					placeholder="your surname..."
					onChange={(e) => handleSurnameChange(e.target.value)}
				/>
				<label for="email">E-mail:</label>
				<input type="email" id="email" name="email" />
				<label for="number">Telephone number:</label>
				<input type="number" id="number" name="number" />
			</form>
		</div>
	);
}
