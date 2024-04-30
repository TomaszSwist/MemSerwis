import './App.css'
import { All } from './pages/All'
import { Regular } from './pages/Regular'
import { Hot } from './pages/Hot'
import { Header } from './componenents/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {

const mems = [
    {
      id: 0,
      title: 'Mem 1',
      upvotes: 6,
      downvotes: 0,
      img: '16966728152932.jpg',
    },
    {
      id: 1,
      title: 'Mem 2',
      upvotes: 1,
      downvotes: 2,
      img: '16995155020280.jpg',
    },
  ]

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<All mems={mems}/>} />
					<Route path='/regular' element={<Regular mems={mems}/>} />
					<Route path='/hot' element={<Hot mems={mems}/>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
