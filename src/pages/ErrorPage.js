import { useSelector } from 'react-redux'

export function ErrorPage() {
	const mems = useSelector(store => store.mems)
	const max = mems.reduce((prev, current) => (prev && prev.upvotes > current.upvotes ? prev : current))

	console.log(mems)
	console.log(max)

	return (
		<section>
			<h1>Kto kazał ci tu wejść?</h1>
			<div>
				<h2>Nasz najlepiej oceniony mem:</h2>
				<img src={`/assets/mems/${max.img}`} alt={max.title} />
			</div>
		</section>
	)
}
