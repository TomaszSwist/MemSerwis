import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { All } from './pages/All'
import { Regular } from './pages/Regular'
import { Hot } from './pages/Hot'
import { Header } from './componenents/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<All/>} />
					<Route path='/regular' element={<Regular/>} />
					<Route path='/hot' element={<Hot/>} />
          {/* <Route path='*' element={<ErrorPage />}/> */}
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
