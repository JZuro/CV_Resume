import { useState } from "react";
import "./App.css";
import Setting from "./components/Setting.jsx";
import Basic from "./components/Basic.jsx";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

	return (
		<div>
			<Basic handleNameChange={setName} handleSurnameChange={setSurname} />
			<Setting title="Experience" />
			<div>{name}</div>
			<div>{surname}</div>
		</div>
	);
}

export default App;
