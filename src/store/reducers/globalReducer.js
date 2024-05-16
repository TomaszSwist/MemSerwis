const initState = {
	mems: [
		{
			id: 0,
			title: 'Mem 1',
			upvotes: 7,
			downvotes: 0,
			img: '16966728152932.jpg',
		},
		{
			id: 1,
			title: 'Mem 2',
			upvotes: 4,
			downvotes: 0,
			img: '16995155020280.jpg',
		},
	],
}

export const memsReducer = (state = initState, action) => {
	switch (action.type) {
		case 'UPVOTE': {
			return { ...state, mems: state.mems.map(mem => mem.id === action.payload ? {...mem, upvotes: mem.upvotes + 1} : mem)}
		}
		case 'DOWNVOTE': {
			return { ...state, mems: state.mems.map(mem => mem.id === action.payload ? {...mem, downvotes: mem.downvotes + 1} : mem)}
		}

		default:
			return state
	}
}
