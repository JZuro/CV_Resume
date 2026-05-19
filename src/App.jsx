import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting.jsx";
import Basic from "./components/Basic.jsx";
import Display from "./components/Display.jsx"

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [telephone, setTelephone] = useState("");

	return (
		<div>
			<Basic
				handleNameChange={setName}
				handleSurnameChange={setSurname}
				handleEmailChange={setEmail}
				handleTelephoneChange={setTelephone}
			/>
			<Setting title="Experience" />
			<Display name={name} surname={surname} email={email} telephone={telephone}/>
			
		</div>
	);
}

export default App;
