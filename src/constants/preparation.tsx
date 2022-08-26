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

const mixingCards = (cards: CardInterface[], res: CardInterface[] = []): any => {
    const index = Math.floor(Math.random() * cards.length);
    const newArray = removeItemFromArray(cards, index);

    if (newArray.length === 0) {
        return res;
    } else {
        return mixingCards(newArray, [...res, cards[index]]);
    }
};

export const getCards = () => {
	const cards = cardsCreate();
	
	return mixingCards(cards);
};
