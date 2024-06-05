import { useSelector } from 'react-redux'
import { Typography }from "@mui/material";

export function ErrorPage() {

	const mems = useSelector(store => store.mems)
	const max = mems.reduce((prev, current) => (prev && prev.upvotes > current.upvotes ? prev : current))

	return (
		<section>
			<Typography variant='h2' align='center' gutterBottom>Kto kazał ci tu wejść?</Typography>
			<Typography variant='h4' align='center'>Nasz najlepiej oceniony mem:</Typography>
				<img src={`assets/mems/${max.img}`} alt={max.title} />
		</section>
	)
}
