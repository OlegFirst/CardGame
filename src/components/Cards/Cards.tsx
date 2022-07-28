import { useState } from 'react';
import { CardInterface } from '../../constants/settings';
import Card from '../_commonComponents/Card/Card';

interface CardsProps {
	cardList: CardInterface[],
	removedCards: Object,
	cardClick: (index: number) => void
};

const Cards = ({ cardList, removedCards, cardClick }: CardsProps) => {	
	const cardListElements = cardList.map((item: CardInterface, index: number) => {		
		const { suit, name } = item;
		const key = suit + index;
		const style = {
			left: index * 2 + 'px',
			top: index * 2 + 'px',
			animationDelay: index / 40 + 's'
		};
		
		return (
			<li
				className="cards__item"
				key={key}
				style={style}
				onClick={() => cardClick(index)}
			>
				<Card
					suit={suit}
					name={name}
					isHide={index in removedCards}
				/>
			</li>
		)
	});
	
	return (
		<section className="cards">
			<ul className="cards__items">
				{cardListElements}
			</ul>			
		</section>
	);
};

export default Cards;