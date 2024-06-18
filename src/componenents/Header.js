import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import { ButtonGroup } from '@mui/material'
import Typography from '@mui/material/Typography'

export function Header() {
	return (
		<>
			<Typography
				className='header__title'
				component={Link}
				to='/MemSerwis/'
				variantMapping={{ h2: 'h1' }}
				variant='h2'
				gutterBottom>
				MemSerwis
			</Typography>
			<nav className='header__nav'>
				<ButtonGroup className='header__nav-bar'>
					<NavLink to='/MemSerwis/'>Wszytkie</NavLink>
					<NavLink to='/MemSerwis/regular'>Regular</NavLink>
					<NavLink to='/MemSerwis/hot'>Hot</NavLink>
					<NavLink to='/MemSerwis/favorite'>Ulubione</NavLink>
				</ButtonGroup>
			</nav>
		</>
	)
}
