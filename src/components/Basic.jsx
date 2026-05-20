import "./Basic.css";

function BasicInput({ title, handleChange, placeholder = "" }) {
	return (
		<label htmlFor={title}>
			{title}
			<input
				type="text"
				id={title}
				name={title}
				placeholder={placeholder}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</label>
	);
}

export default function Basic({
	handleNameChange,
	handleSurnameChange,
	handleEmailChange,
	handleTelephoneChange,
}) {
	return (
		<div className="edit">
			<form>
				<BasicInput
					title="name"
					handleChange={handleNameChange}
					placeholder="your first name..."
				/>
				<BasicInput
					title="surname"
					handleChange={handleSurnameChange}
					placeholder="your surname..."
				/>
				<BasicInput
					title="email"
					handleChange={handleEmailChange}
					placeholder="your email..."
				/>
				<BasicInput
					title="telephone"
					handleChange={handleTelephoneChange}
					placeholder="your telephone number..."
				/>
			</form>
		</div>
	);
}
