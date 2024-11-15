import React from 'react';
import { useState } from 'react';
import logo from '/logo.svg';
import './home.css';

export const Home: React.FC = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div>
				<a href="#" target="_blank"></a>
				<a href="https://github.com/RinaLis/rpg_notes_frontend">
					<img src={logo} className="logo react" alt="NRI logo" />
				</a>
			</div>
			<h1>Home</h1>
			<div >
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
            <div>
            <button onClick={() => (window.location.href = '/login')}>
					go to Login
				</button>
            </div>
		</>
	);
};
