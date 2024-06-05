import './Header.css'
import { NavLink } from 'react-router-dom'
import { ButtonGroup } from '@mui/material'
import Typography from '@mui/material/Typography'

export function Header() {
	return (
		<>
			<NavLink className='header__nav-title' to='/MemSerwis/'>
				<Typography variantMapping={{h2: 'h1'}} variant='h2' gutterBottom>
					MemSerwis
				</Typography>
			</NavLink>

			<div className='header__nav-bar'>
				<ButtonGroup>
					<NavLink to='/MemSerwis/'>Wszytkie</NavLink>
					<NavLink to='/MemSerwis/regular'>Regular</NavLink>
					<NavLink to='/MemSerwis/hot'>Hot</NavLink>
				</ButtonGroup>
			</div>
		</>
	)
}
