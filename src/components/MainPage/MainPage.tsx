import { useState } from 'react';

import Cards from '../Cards/Cards';
import InPlay from '../InPlay/InPlay';
import Button from '../Button/Button';

import { getCards } from '../../constants/preparation';
const cardList = getCards();
let currentCardIndex = cardList.length;

const MainPage = () => {
	const [removedCards, setRemovedCards] = useState({});
	const [inPlayCards, setInPlayCards] = useState({
		firstIndex: 0,
		lastIndex: 0
	});
	
	const clickHandler = () => {
		if (currentCardIndex < 0) {
			return;
		}
		
		console.log(currentCardIndex)		
		const index = currentCardIndex;
		
		setRemovedCards(prev => ({
			...prev,
			[index]: true,
			[index + 1]: true,
			[index + 2]: true,
			[index + 3]: true
		}));
		
		setInPlayCards({
			firstIndex: currentCardIndex,
			lastIndex: currentCardIndex - 4
		});
		
		currentCardIndex -= 4;
	};
	
	const cardClickHandler = (index: number) => {
		setRemovedCards(prev => ({
			...prev,
			[index]: true
		}));
	};
	
	return (
		<section className="main-page">
			<Cards
				cardList={cardList}
				removedCards={removedCards}
				cardClick={cardClickHandler}
			/>
			
			<InPlay
				inPlayCards={inPlayCards}
			/>
			
			<Button
				click={clickHandler}
			/>
		</section>
	);
}

export default MainPage