import { useSelector } from "react-redux";
import { Mem } from "../componenents/Mem";

export function All() {
	const mems = useSelector(store => store.mems) 

	return (
		<section>
			<Mem mems={mems}/>
		</section>
	)
}