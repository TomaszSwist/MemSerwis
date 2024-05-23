const initState = {
	mems: [
		{
			id: 0,
			title: 'Mem 1',
			upvotes: 7,
			downvotes: 0,
			rate: true,
			img: '16966728152932.jpg',
		},
		{
			id: 1,
			title: 'Mem 2',
			upvotes: 4,
			downvotes: 0,
			rate: false,
			img: '16995155020280.jpg',
		},
		{
			id: 2,
			title: 'Mem 3',
			upvotes: 20,
			downvotes: 5,
			rate: true,
			img: '16999928131995.jpg',
		},
		{
			id: 3,
			title: 'Mem 4',
			upvotes: 10,
			downvotes: 6,
			rate: false,
			img: '17035906752380.jpg',
		},
		{
			id: 4,
			title: 'Mem 5',
			upvotes: 12,
			downvotes: 8,
			rate: false,
			img: '17084637887994.jpg',
		},
		{
			id: 5,
			title: 'Mem 6',
			upvotes: 50,
			downvotes: 14,
			rate: true,
			img: '17099936020616.jpg',
		},
		{
			id: 6,
			title: 'Mem 7',
			upvotes: 24,
			downvotes: 3,
			rate: true,
			img: '17103278502675.jpg',
		},
		{
			id: 7,
			title: 'Mem 8',
			upvotes: 30,
			downvotes: 50,
			rate: true,
			img: '17129450995124.jpg',
		},
		{
			id: 8,
			title: 'Mem 9',
			upvotes: 8,
			downvotes: 1,
			rate: true,
			img: '17140767186033.jpg',
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
		case 'RATE': {
			return { ...state, mems: state.mems.map(mem => mem.id === action.payload ? {...mem, rate: mem.rate === true ? false : true} : mem)}
		}

		default:
			return state
	}
}
