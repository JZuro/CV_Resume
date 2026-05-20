export default function Setting({ title, clickHandle }) {
	return <h2 id={`edit${title}`} onClick={() => clickHandle(`#edit${title}`)}>{title}</h2>;
}
