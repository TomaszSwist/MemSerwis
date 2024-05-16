import './Header.css'
import { NavLink } from 'react-router-dom'
import { Button, ButtonGroup } from '@mui/material'

export function Header() {
	return (
		<>
			<NavLink className='navTitle' to='/'>
				<h1 className='title'>MemSerwis</h1>
			</NavLink>
			<div className='navbar'>
				<ButtonGroup>
					<NavLink to='/'>Wszytkie</NavLink>
					<NavLink to='/regular'>Regular</NavLink>
					<NavLink to='/hot'>Hot</NavLink>
				</ButtonGroup>
			</div>
		</>
	)
}
