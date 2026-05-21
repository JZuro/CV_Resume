export default function Setting({ title, clickHandle }) {
	return (
		<div
			className="setting"
			id={`edit${title}`}
			onClick={() => clickHandle(`#edit${title}`)}
		>
			<h2>{title}</h2>
		</div>
	);
}
