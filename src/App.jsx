import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting.jsx";
import Basic from "./components/Basic.jsx";
import Display from "./components/Display.jsx";
import Experience from "./components/Experience.jsx";

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");

	const [experience, setExperience] = useState({});

	const [activeEdit, setEdited] = useState(null);

	return (
		<div id="main">
			<div id="settings">
				<Setting title="Basic" clickHandle={setEdited} />
				<Setting title="Experience" clickHandle={setEdited} />
				<Setting title="Education" clickHandle={setEdited} />
			</div>
			<div className="edit">
				<div hidden={activeEdit !== "#editBasic"}>
					<Basic
						handleNameChange={setName}
						handleSurnameChange={setSurname}
						handleEmailChange={setEmail}
						handleTelephoneChange={setTelephone}
					/>
				</div>
				<div hidden={activeEdit !== "#editExperience"}>
					<Experience handleExperience={setExperience} experience={experience} />
				</div>
			</div>
			<div id="displayContainer">
				<Display
					name={name}
					surname={surname}
					email={email}
					telephone={telephone}
					experience={experience}
				/>
			</div>
		</div>
	);
}

export default App;
