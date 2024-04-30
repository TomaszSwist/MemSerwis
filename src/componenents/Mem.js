export function Mem(props) {

    const mems = props.mems

	return (
		<section>
			{mems.map(mem => (
				<div key={mem.id}>
					<h2>{mem.title}</h2>
					<img src={`assets/mems/${mem.img}`} alt={mem.title} />
                    <p>Łapka w góre: <span>{mem.upvotes}</span></p>
                    <p>Łapka w dół: <span>{mem.downvotes}</span></p>
				</div>
			))}
		</section>
	)
}
