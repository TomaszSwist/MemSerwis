import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { All } from './pages/All'
import { Regular } from './pages/Regular'
import { Hot } from './pages/Hot'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './componenents/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/MemSerwis/' element={<All />} />
					<Route path='/MemSerwis/regular' element={<Regular />} />
					<Route path='/MemSerwis/hot' element={<Hot />} />
					<Route path={'/MemSerwis/*'} element={<ErrorPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
