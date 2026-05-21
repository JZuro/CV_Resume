import "./styles/Display.css";

export default function Display({
	name,
	surname,
	email,
	telephone,
	experience,
	education,
}) {
	function experienceItem(title, description) {
		return (
			<>
				<h4>{title}</h4>
				<p>{description}</p>
			</>
		);
	}
	function educationItem(school, subject, degree) {
		return (
			<>
				<h4>{school}</h4>
				<span>
					<p>{subject}</p> <p>{degree}</p>
				</span>
			</>
		);
	}

	return (
		<div className="display">
			<div id="basic">
				<div id="email">{email}</div>
				<div id="telephone">{telephone}</div>
				<div id="fullName">
					<span>{`${name} ${surname}`}</span>
				</div>
			</div>
			<div id="experience">
				<h3 hidden={Object.values(experience).length === 0}>
					Experience
				</h3>
				{experience &&
					Object.values(experience).map((exp) =>
						experienceItem(exp.title, exp.description),
					)}
			</div>
			<div id="education">
				<h3 hidden={Object.values(education).length === 0}>
					Education
				</h3>
				{education &&
					Object.values(education).map((ed) =>
						educationItem(ed.school, ed.subject, ed.degree),
					)}
			</div>
		</div>
	);
}
