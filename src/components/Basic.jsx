import "./Basic.css";

function BasicInput({ title, handleChange, placeholder = "", type="text", autocomplete="" }) {
	return (
		<label htmlFor={title}>
			{title}
			<input
				type={type}
				id={title}
				name={title}
				placeholder={placeholder}
				onChange={(e) => handleChange(e.target.value)}
				autocomplete={autocomplete}
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
					autocomplete="given-name"
				/>
				<BasicInput
					title="surname"
					handleChange={handleSurnameChange}
					placeholder="your surname..."
					autocomplete="family-name"
				/>
				<BasicInput
					title="email"
					handleChange={handleEmailChange}
					placeholder="your email..."
					autocomplete="email"
					type="email"
				/>
				<BasicInput
					title="telephone"
					handleChange={handleTelephoneChange}
					placeholder="your telephone number..."
					autocomplete="tel"
					type="tel"
				/>
			</form>
		</div>
	);
}
