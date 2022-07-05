import { useState } from 'react';

import { CardInterface } from '../../constants/settings';
import Card from '../_commonComponents/Card/Card';
import { getCards } from '../../constants/preparation';

const Cards = () => {
	const [cardList, setCardList] = useState([...getCards()]);
	
	const cardClickHandler = (index: number) => {
		setCardList(
			cardList.filter((item, itemIndex) => {
				return index !== itemIndex;
			})
		);
	};
	
	const cardListElements = cardList.map((item, index) => {
		const { suit, name } = item;
		const key = suit + name;
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
				onClick={() => cardClickHandler(index)}
			>
				<Card
					suit={suit}
					name={name}
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