import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

export function Mem(props) {

    const mems = props.mems

	return (
		<section>
			{mems.map(mem => (
				<div key={mem.id}>
					<h2>{mem.title}</h2>
					<img src={`assets/mems/${mem.img}`} alt={mem.title} />
                    <p><span>{mem.upvotes}</span><NorthIcon />
                    <span>{mem.downvotes}</span><SouthIcon /></p>
				</div>
			))}
		</section>
	)
}
