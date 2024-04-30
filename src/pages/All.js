import { Mem } from "../componenents/Mem";

export function All(props) {

	return (
		<section>
			<h1>All</h1>
			<Mem mems={props.mems}/>
		</section>
	)
}