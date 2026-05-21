import "./styles/Rank.css";

export default function Rank({ descriptory = true }) {
	return (
		<div className="Rank">
			{descriptory ?
				<input type="text"></input>
			:	<form>
					<input type="radio" id="One" name="value" value="1" />
					<label for="One">1</label>
					<input type="radio" id="Two" name="value" value="2" />
					<label for="Two">2</label>
					<input type="radio" id="Three" name="value" value="3" />
					<label for="Three">3</label>
					<input type="radio" id="Four" name="value" value="4" />
					<label for="Four">4</label>
					<input type="radio" id="Five" name="value" value="5" />
					<label for="Five">5</label>
				</form>
			}
		</div>
	);
}
