import { useState } from 'react';

import { CardInterface } from '../../constants/settings';
import Card from '../_commonComponents/Card/Card';
import { getCards } from '../../constants/preparation';

const cardList = getCards();

const Cards = () => {
	const cardListRemoved = {};
	const [one, setOne] = useState(0);
	// const [cardList, setCardList] = useState([...getCards()]);
	// console.dir(cardList);
	
	const cardClickHandler = (index: number) => {
		setOne((prev: any) =>  {
			console.log(prev)

			return '14';
		});


		// const property = 'card' + index;
		// console.log(cardListRemoved.hasOwnProperty('card' + index));
		// cardListRemoved[property] = true;
		
		// // setCardList(
			// // cardList.filter((item, itemIndex) => {
				// // return index !== itemIndex;
			// // })
		// // );
	};
	
	const cardListElements = cardList.map((item: CardInterface, index: number) => {
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