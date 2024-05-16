import { useSelector } from "react-redux";
import { Mem } from "../componenents/Mem";

export function Regular() {

const mems = useSelector(store => store.mems.filter(mem => (mem.upvotes - mem.downvotes <= 5))) 
	
	return (
		<section>
			<h1>Regular</h1>
			<Mem mems={mems} />
		</section>
	)
}