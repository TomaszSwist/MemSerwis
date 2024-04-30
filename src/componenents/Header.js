import { Link } from 'react-router-dom'

export function Header() {
	return (
		<>
			<h1>MemSerwis</h1>
			<ul>
				<li>
					<Link to='/'>Strona główna</Link>
				</li>
				<li>
					<Link to='/regular'>Regular</Link>
				</li>
				<li>
					<Link to='/hot'>Gorące</Link>
				</li>
			</ul>
		</>
	)
}
