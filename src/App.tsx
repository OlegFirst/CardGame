import React from 'react';
import './scss/index.scss';

import Cards from './components/Cards/Cards';

import { getCards } from './constants/preparation1';

function App() {
	getCards();
	
	return (
		<div className="App">
			
		</div>
	);
}

export default App;