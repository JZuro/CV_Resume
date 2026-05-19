import "./Display.css"

export default function Display({ name, surname, email, telephone }) {
	return (
		<div id="display">
			<div id="basic">
				<div id="fullName">
					<span>{`${name} ${surname}`}</span>
				</div>
				<div id="email">{email}</div>
				<div id="email">{telephone}</div>
			</div>
		</div>
	);
}
