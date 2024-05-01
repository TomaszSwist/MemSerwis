import SouthIcon from '@mui/icons-material/South'
import NorthIcon from '@mui/icons-material/North'
import Button from '@mui/material/Button'
import { useState } from 'react'

export function Mem(props) {
	const [mems, setMems] = useState(props.mems)

	return (
		<section>
			{mems.map(mem => (
				<div key={mem.id}>
					<h2>{mem.title}</h2>
					<img src={`assets/mems/${mem.img}`} alt={mem.title} />
					<div>
						<Button
							onClick={() => {
                                const newValue = mems[mem.id].upvotes + 1
								setMems(mems.map(obj => (obj.id === mem.id ? { ...obj, upvotes: newValue } : obj)))
							}}
							variant='outlined'
							endIcon={<NorthIcon />}>
							{mem.upvotes}
						</Button>
						<Button onClick={() => {
                                const newValue = mems[mem.id].downvotes + 1
								setMems(mems.map(obj => (obj.id === mem.id ? { ...obj, downvotes: newValue } : obj)))
							}}
                            variant='outlined' endIcon={<SouthIcon />}>
							{mem.downvotes}
						</Button>
					</div>
				</div>
			))}
		</section>
	)
}
