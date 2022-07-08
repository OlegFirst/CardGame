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

const mixingCards = (cards: CardInterface[]) => {
	const cardsLength = cards.length;
	let cardsCount = cardsLength;
	
	console.dir(cards);
	// console.dir(removeItemFromArray(cards, 0));
	
	for (let i = 0; i < cardsLength; i++) {
		let rnd = Math.floor(Math.random() * cardsCount);
		removeItemFromArray(cards, rnd);
	}
};

export const getCards = () => {
	// console.clear();
	const cards = cardsCreate();
	
	console.dir(mixingCards(cards));
};