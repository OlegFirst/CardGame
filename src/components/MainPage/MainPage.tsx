import { useState } from 'react';

import Cards from '../Cards/Cards';
import InPlay from '../InPlay/InPlay';
import Button from '../Button/Button';

import { getCards } from '../../constants/preparation';
const cardList = getCards();

const MainPage = () => {
	const [removedCards, setRemovedCards] = useState({});
	const [currentIndex, setCurrentIndex] = useState(cardList.length);
	const [inPlayCards, setInPlayCards] = useState({
		firstIndex: 0,
		lastIndex: 0
	});
	
	const clickHandler = (limit: number) => {
		if (currentIndex < 0) {
			return;
		}
		
		const removedIndexes = Array(limit).fill(currentIndex).map((defaultIndex, index) => defaultIndex + index);
		const removedCards = removedIndexes.reduce((result, removedIndex) => ({ 
			...result,
			[removedIndex]: true
		}), {}); 
		
		setRemovedCards(prev => ({
			...prev,
			...removedCards
		}));
		
		setInPlayCards({
			firstIndex: currentIndex,
			lastIndex: currentIndex - limit
		});
		
		setCurrentIndex((prev: number) => prev - limit);
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
				cardList={cardList}
				inPlayCards={inPlayCards}
			/>
			
			<Button
				click={() => clickHandler(3)}
			/>
		</section>
	);
}

export default MainPage