import './Header.css'
import { NavLink } from 'react-router-dom'
import { ButtonGroup } from '@mui/material'
import Typography from "@mui/material/Typography";

export function Header() {
	return (
		<>
			<NavLink className='header__nav-title' to='/'>
			<Typography variant='h1' gutterBottom>MemSerwis</Typography>
			</NavLink>
			<div className='header__nav-bar'>
				<ButtonGroup>
					<NavLink to='/'>Wszytkie</NavLink>
					<NavLink to='/regular'>Regular</NavLink>
					<NavLink to='/hot'>Hot</NavLink>
					<NavLink to='/add'>Dodaj</NavLink>
				</ButtonGroup>
			</div>
		</>
	)
}
