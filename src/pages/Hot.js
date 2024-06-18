import { useSelector } from 'react-redux'
import { Mem } from '../componenents/Mem'

export function Hot() {
	const mems = useSelector(store => store.mems.filter(mem => mem.upvotes - mem.downvotes > 5))

	return (
		<section>
			<Mem mems={mems} />
		</section>
	)
}
