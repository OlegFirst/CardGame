import {
	CardInterface,
	PIPS_COLOR_MAP
} from './settings';

const NAMED_CARDS = ["J", "D", "K", "A"];

const CARD_SYMBOLS: string[] = [
  ...Array(9).fill(0).map((_, index) => `${index + 2}`),
  ...NAMED_CARDS
];

const removeItemFromArray = (items: CardInterface[], itemIndex: number) => {
	const head = items.slice(0, itemIndex);
	const rest = items.slice(itemIndex + 1, items.length);	
	const res = head.concat(rest);
	
	return res;
};

const cardsCreate = () => (
	Object.keys(PIPS_COLOR_MAP).reduce <CardInterface[]> ((cards, suit) => (
		cards.concat(
			CARD_SYMBOLS.reduce <CardInterface[]> (
			(suitCards, name) => suitCards.concat({
				suit,
				name 
			}), [])
		)
	), [])
);

let res: CardInterface[] = [];
const mixingCards = (cards: CardInterface[]): any => {
	let index = Math.floor(Math.random() * cards.length);
    let newArray = removeItemFromArray(cards, index);
	res.push(cards[index]);
	
	if (newArray.length === 0) {
		return [];
	} else {
		return mixingCards(newArray);
	}	
};

const arrayTest = (array: any) => {
	const res = array.slice(0, 1);
	return res;
};

const recur = (array: []): any => {
	if (array.length <= 1) {
		return '_';
	} else {
		return '_' + recur(array);
	}
};

export const getCards = () => {
	const cards = cardsCreate();
	mixingCards(cards);
	
	return res;
};