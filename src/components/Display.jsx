import "./Display.css";

export default function Display({
	name,
	surname,
	email,
	telephone,
	experience
}) {
	function ExperienceItem(title , description) {
		return (
			<>
			<h4>{title}</h4>
			<p>{description}</p>
			</>
		)
	}

	return (
		<div className="display">
			<div id="basic">
				<div id="fullName">
					<span>{`${name} ${surname}`}</span>
				</div>
				<div id="email">{email}</div>
				<div id="email">{telephone}</div>
			</div>
			<div id="experience">
				<h3>Experience</h3>{experience && Object.values(experience).map(exp => ExperienceItem(exp.title, exp.description))}
			</div>
		</div>
	);
}
