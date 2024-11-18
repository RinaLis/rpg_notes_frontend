import { useEffect, useState } from 'react';
import logo from '/logo.svg';
import './App.css';
import {
	requestGetUser,
	requestLoginUser
} from './services/slices/userSlice';
import { useDispatch } from './services/store';
import { requestUserAdventures } from './services/slices/userAdventuresSlice';

function App() {
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();
	// const {user} = useSelector(getUserState)

	useEffect(() => {
		dispatch(
			requestLoginUser({
				email: 'anpast2014@yandex.ru',
				password: '1234567890',
			})
		).then(() => {
			dispatch(requestGetUser());
		});
		dispatch(
			requestUserAdventures()
		);
	}, [dispatch]);

	return (
		<>
			<div>
				<a href="#" target="_blank"></a>
				<a href="https://github.com/RinaLis/rpg_notes_frontend" target="_blank">
					<img src={logo} className="logo react" alt="NRI logo" />
				</a>
			</div>
			<h1>НРИ</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
