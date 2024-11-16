/* eslint-disable react/react-in-jsx-scope */
import { FC } from 'react';

export const LoginUI: FC = () => {
	return (
		<main>
			<h1>Login</h1>
			<div>
				<form name="login" onSubmit={() => {}}>
					<div>
						<input />
					</div>
					<div>
						<input />
					</div>
					<div>
						<button
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								alert('submit');
							}}
						>
							Войти
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};
