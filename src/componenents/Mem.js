import SouthIcon from '@mui/icons-material/South'
import NorthIcon from '@mui/icons-material/North'
import Button from '@mui/material/Button'
import { useDispatch  } from 'react-redux'

export function Mem(props) {
	const mems = props.mems
	const dispatchEvent = useDispatch()

	const onUpvote = id => {
		dispatchEvent({type: 'UPVOTE', payload: id})
	}

	const onDownvote = id => {
		dispatchEvent({type: 'DOWNVOTE', payload: id})
	}

	return (
		<section>
			{mems.map(mem => (
				<div key={mem.id}>
					<h2>{mem.title}</h2>
					<img src={`/assets/mems/${mem.img}`} alt={mem.title} />
					<div>
						<Button
							onClick={() => onUpvote(mem.id)}
							variant='outlined'
							endIcon={<NorthIcon />}>
							{mem.upvotes}
						</Button>
						<Button onClick={() => onDownvote(mem.id)}
                            variant='outlined' endIcon={<SouthIcon />}>
							{mem.downvotes}
						</Button>
					</div>
				</div>
			))}
		</section>
	)
}
