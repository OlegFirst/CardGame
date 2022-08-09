import { useState } from 'react';

import Cards from '../Cards/Cards';
import InPlay from '../InPlay/InPlay';
import Button from '../Button/Button';
import PopUp from '../_commonComponents/PopUp/PopUp';

import { getCards } from '../../constants/preparation';

const cardList = getCards();
let currentIndex = cardList.length;

const MainPage = () => {
	const [removedCards, setRemovedCards] = useState({});
	const [inPlayCards, setInPlayCards] = useState({
		firstIndex: 0,
		lastIndex: 0
	});
	const [isGameEnd, setIsGameEnd] = useState(false);
	
	const cardIndexesForRemove = (limit: number) => Array(limit).fill(currentIndex - limit).map((defaultIndex, index) => defaultIndex + index);
	const cardsForRemove = (indexes: number[]) => indexes.reduce((result, removedIndex) => ({ 
		...result,
		[removedIndex]: true
	}), {});
	
	const clickHandler = (limit: number) => {
		if (currentIndex < 0) {
			setIsGameEnd(true);
			return;
		}
		
		const indexes = cardIndexesForRemove(limit);
		const cards = cardsForRemove(indexes);
		
		setRemovedCards(prev => ({
			...prev,
			...cards
		}));
		
		setInPlayCards({
			firstIndex: currentIndex,
			lastIndex: currentIndex - limit
		});
		
		currentIndex -= limit;
	};
	
	const cardClickHandler = (index: number) => {
		setRemovedCards(prev => ({
			...prev,
			[index]: true
		}));
	};
	
	const onClickHandler = () => {
		setIsGameEnd(false);
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
				click={() => clickHandler(4)}
			/>
			
			{ isGameEnd &&
				<PopUp
					onClick={onClickHandler}
				/>
			}
		</section>
	);
}

export default MainPage;