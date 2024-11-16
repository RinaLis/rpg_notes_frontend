import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Apps from './components/app/app';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Apps />
		</BrowserRouter>
	</StrictMode>
);
