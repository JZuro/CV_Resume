import "./Experience.css";

function ExperienceInput({
	handleChange,
	experience,
	id = crypto.randomUUID(),
}) {
	return (
		<fieldset id={id}>
			<input
				className="experienceTitle"
				type="text"
				placeholder={"name your experience..."}
				id={id + "Title"}
				onChange={(e) =>
					handleChange({
						...experience,
						[id]: {
							...experience?.[id],
							title: e.target.value,
						},
					})
				}
			/>
			<textarea
				className="experienceDescription"
				type="text"
				placeholder={"describe your experience..."}
				id={id + "Description"}
				onChange={(e) =>
					handleChange({
						...experience,
						[id]: {
							...experience?.[id],
							description: e.target.value,
						},
					})
				}
			/>
			<button
				onClick={(event) => {
					event.preventDefault();
					let remove = structuredClone(experience);
					delete remove[id];
					handleChange(remove);
				}}
			>
				X
			</button>
		</fieldset>
	);
}

export default function Experience({ handleExperience, experience }) {
	return (
		<div className="edit">
			<form id="experienceForm">
				{Object.keys(experience).map((key) => (
					<ExperienceInput
						key={key}
						id={key}
						handleChange={handleExperience}
						placeholder="your experience..."
						experience={experience}
					/>
				))}
				<button
					onClick={(event) => {
						event.preventDefault();
						handleExperience({
							...experience,
							[crypto.randomUUID()]: {},
						});
					}}
					id="addExperience"
				>
					Add
				</button>
			</form>
		</div>
	);
}
