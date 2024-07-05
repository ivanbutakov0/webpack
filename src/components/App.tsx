import Cloud from '@/assets/cloud.svg'
import image from '@/assets/image.png'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as classes from './App.module.scss'

const App = () => {
	const [counter, setCounter] = useState(0)

	const handleIncrementClick = () => setCounter((prev) => prev + 1)

	return (
		<div>
			<div>
				<img src={image} alt="logo" width={20} height={20} />
			</div>
			<div>
				<Cloud width={20} height={20} />
			</div>
			<Link to="/about">About</Link>
			<Link to="/shop">Shop</Link>
			<h1>{counter}</h1>
			<button
				className={classes.button}
				type="button"
				onClick={handleIncrementClick}
			>
				Increment
			</button>
			<Outlet />
		</div>
	)
}
export default App
