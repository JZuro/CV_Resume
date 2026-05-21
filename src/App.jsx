import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting.jsx";
import Basic from "./components/Basic.jsx";
import Display from "./components/Display.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");

	const [experience, setExperience] = useState({});
	const [education, setEducation] = useState({});

	const [activeEdit, setEdited] = useState(null);

	return (
		<div id="main">
			<div id="settings">
				<Setting title="Basic" clickHandle={setEdited} />
				<Setting title="Experience" clickHandle={setEdited} />
				<Setting title="Education" clickHandle={setEdited} />
			</div>
			<div className="edit">
				<div className="editBasic" hidden={activeEdit !== "#editBasic"}>
					<Basic
						handleNameChange={setName}
						handleSurnameChange={setSurname}
						handleEmailChange={setEmail}
						handleTelephoneChange={setTelephone}
					/>
				</div>
				<div
					className="editExperience"
					hidden={activeEdit !== "#editExperience"}
				>
					<Experience
						handleExperience={setExperience}
						experience={experience}
					/>
				</div>
				<div
					className="editEducation"
					hidden={activeEdit !== "#editEducation"}
				>
					<Education
						handleEducation={setEducation}
						education={education}
					/>
				</div>
			</div>
			<div id="displayContainer">
				<Display
					name={name}
					surname={surname}
					email={email}
					telephone={telephone}
					experience={experience}
					education={education}
				/>
			</div>
		</div>
	);
}

export default App;
