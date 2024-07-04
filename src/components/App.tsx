import { useState } from 'react'
import './App.scss'

const App = () => {
	const [counter, setCounter] = useState(0)

	const handleIncrementClick = () => setCounter((prev) => prev + 1)

	return (
		<div>
			<h1>{counter}</h1>
			<button type="button" onClick={handleIncrementClick}>
				Increment
			</button>
		</div>
	)
}
export default App
