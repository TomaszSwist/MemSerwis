import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'

export function Add() {
	const VisuallyHiddenInput = styled('input')({
		clip: 'rect(0 0 0 0)',
		clipPath: 'inset(50%)',
		height: 1,
		overflow: 'hidden',
		position: 'absolute',
		bottom: 0,
		left: 0,
		whiteSpace: 'nowrap',
		width: 1,
	})

	return (
		<Card sx={{ mb: 5, minWidth: 500, maxWidth: 720 }}>
			<Box component='form' sx={{ p: 2 }} noValidate autoComplete='off'>
				<TextField sx={{ width: '100%' }} required variant='filled' label='Tytuł' helperText='Nazwa mema' />

				<Button
					sx={{ m: 2 }}
					component='label'
					role={undefined}
					variant='outlined'
					tabIndex={-1}
					startIcon={<CloudUploadIcon />}>
					Dodaj plik
					<VisuallyHiddenInput type='file' />
				</Button>
			</Box>
		</Card>
	)
}
