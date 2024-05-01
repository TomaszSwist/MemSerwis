import { Button, ButtonGroup } from '@mui/material'

export function Header() {
	return (
		<>
			<h1>MemSerwis</h1>
			<ButtonGroup variant='contained' aria-label='Basic button group'>
				<Button href='/'>Strona główna</Button>
				<Button href='/regular'>Regular</Button>
				<Button href='/hot'>Gorące</Button>
			</ButtonGroup>
		</>
	)
}
