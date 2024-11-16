import { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="#aaa">aaa</a>
				<a href="https://github.com/RinaLis/rpg_notes_frontend">
					<img src={logo} className="logo react" alt="NRI logo" />
				</a>
			</div>
			<h1>НРИ</h1>
			<div className="card">
				<button onClick={() => setCount((clickCount) => clickCount + 1)}>count is {count}</button>
			</div>
		</>
	);
}

export default App;
