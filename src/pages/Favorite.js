import { useSelector } from 'react-redux'
import { Mem } from '../componenents/Mem'

export function Favorite() {
	const mems = useSelector(store => store.mems.filter(mem => mem.rate === true))

	return (
		<section>
			<Mem mems={mems} />
		</section>
	)
}
