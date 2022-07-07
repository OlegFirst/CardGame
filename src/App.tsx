import React from 'react';
import './scss/index.scss';

import { getCards } from './constants/preparation';

// import Cards from './components/Cards/Cards';

function App() {
	getCards();

	return (
		<div className="App">
			
		</div>
	);
}

export default App;