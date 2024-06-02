import './Mem.css'
import SouthIcon from '@mui/icons-material/South'
import NorthIcon from '@mui/icons-material/North'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'

export function Mem(props) {
	const mems = props.mems
	const dispatchEvent = useDispatch()

	const onUpvote = id => {
		dispatchEvent({ type: 'UPVOTE', payload: id })
	}

	const onDownvote = id => {
		dispatchEvent({ type: 'DOWNVOTE', payload: id })
	}

	const onRate = id => {
		dispatchEvent({ type: 'RATE', payload: id })
	}

	return (
		<>
			{mems.map(mem => (
				<Card sx={{ mb: 5, maxWidth: 720 }} key={mem.id}>
					<img className='mem__card-img' src={`/assets/mems/${mem.img}`} alt={mem.title} />
					
					<Box sx={{ p: 2 }}>
						<Typography gutterBottom variant='h3'>
							{mem.title}
						</Typography>

						<Stack direction='row' justifyContent='space-between' alignItems='center'>
							<div>
								<Button onClick={() => onUpvote(mem.id)} variant='outlined' endIcon={<NorthIcon />}>
									{mem.upvotes}
								</Button>
								<Button onClick={() => onDownvote(mem.id)} variant='outlined' endIcon={<SouthIcon />}>
									{mem.downvotes}
								</Button>
							</div>

							<Button onClick={() => onRate(mem.id)} variant='outlined'>
								{mem.rate === true ? <StarIcon /> : <StarBorderIcon />}
							</Button>
						</Stack>
					</Box>
				</Card>
			))}
		</>
	)
}
