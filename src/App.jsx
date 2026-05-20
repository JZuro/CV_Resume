import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting.jsx";
import Basic from "./components/Basic.jsx";
import Display from "./components/Display.jsx";

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");

	const [edited, setEdited] = useState(null);

	return (
		<div id="main">
			<div className="settings">
				<Setting title="Basic" clickHandle={setEdited} />
				<Setting title="Experience" clickHandle={setEdited} />
				<Setting title="Education" clickHandle={setEdited} />
			</div>
			{(edited === "#editBasic") && (<Basic
				handleNameChange={setName}
				handleSurnameChange={setSurname}
				handleEmailChange={setEmail}
				handleTelephoneChange={setTelephone}
			/>)}
			<Display
				name={name}
				surname={surname}
				email={email}
				telephone={telephone}
			/>
		</div>
	);
}

export default App;
