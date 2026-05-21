import "./styles/Education.css";

function EducationInput({ handleChange, education, id = crypto.randomUUID() }) {
	return (
		<fieldset id={id}>
			<label htmlFor={id + "Title"}>
				School
				<input
					className="educationSchool"
					type="text"
					placeholder={"school / college / university..."}
					id={id + "Title"}
					onChange={(e) =>
						handleChange({
							...education,
							[id]: {
								...education?.[id],
								school: e.target.value,
							},
						})
					}
				/>
			</label>
			<label htmlFor={id + "Description"}>
				Subject
				<input
					className="educationSubject"
					type="text"
					placeholder={"subject..."}
					id={id + "Description"}
					onChange={(e) =>
						handleChange({
							...education,
							[id]: {
								...education?.[id],
								subject: e.target.value,
							},
						})
					}
				/>
			</label>
			<label htmlFor={id + "Degree"}>Degree
			<input
				className="educationDegree"
				type="text"
				placeholder={"degree..."}
				id={id + "Degree"}
				onChange={(e) =>
					handleChange({
						...education,
						[id]: {
							...education?.[id],
							degree: e.target.value,
						},
					})
				}
			/></label>
			<button
				onClick={(event) => {
					event.preventDefault();
					let remove = structuredClone(education);
					delete remove[id];
					handleChange(remove);
				}}
			>
				X
			</button>
		</fieldset>
	);
}

export default function Education({ handleEducation, education }) {
	return (
		<div className="edit">
			<form id="educationForm">
				{Object.keys(education).map((key) => (
					<EducationInput
						key={key}
						id={key}
						handleChange={handleEducation}
						placeholder="your education..."
						education={education}
					/>
				))}
				<button
					onClick={(event) => {
						event.preventDefault();
						if (Object.keys(education).length < 3) {
							handleEducation({
								...education,
								[crypto.randomUUID()]: {},
							});
						}
					}}
					disabled={Object.keys(education).length >= 3}
					id="addEducation"
				>
					Add
				</button>
			</form>
		</div>
	);
}
