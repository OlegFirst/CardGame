import { CardInterface } from './settings';









// type Card = {
  // suit: string;
  // name: string;
// }

interface Card {
    suit: string,
    name: string
};

const PIPS = [
    'Hearts',
    'Daimonds',
    'Clubs',
	'Spades'
];

const NAMED_CARDS = ["J", "D", "K", "A"];

const CARD_SYMBOLS: string[] = [
  ...Array(9).fill(0).map((_, index) => `${index + 2}`),
  ...NAMED_CARDS
];

function shuffle(array: number[]) {
  var tmp, current, top = array.length;
  
  if(top) {
    while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  }
  
  return array;
}

const CARD_PACK = PIPS.reduce((pack: Card[], suit: string) => [
    ...CARD_SYMBOLS.reduce((previous, name) => {
        return [...previous, { suit, name }]
    }, pack)
], []);

const ORDERED_CARD_INDEXES = CARD_PACK.map((_, index) => index);

export const getCards = () => {
	const shuffledIndexes = shuffle([...ORDERED_CARD_INDEXES]);
	const result: Card[] = [];
	
	shuffledIndexes.forEach((shuffledIndex, currentIndex) => {
		result[currentIndex] = {...CARD_PACK[shuffledIndex]};
	});
	
	return result;
};

// [Tuesday 1:35 PM] Serhii Bilyk
// export interface CardInterface {
//     suit: Suits,
//     name: Values
// };

// type Suits = 'Hearts' | 'Daimonds' | 'Clubs' | 'Spades'

// type Values = '2' | '3' | 'J' | 'D' | 'K' | 'A'

// type SuitColor = 'red' | 'black'

// type Permutation<T extends string> = `${Values} ${T}`

// type HTMLEntity = `&#${number}${number}${number}${number};`;

// type StyleOptions<T> = Record<Suits, T>

// export const PIPS_COLOR_MAP: StyleOptions<SuitColor> = {
//     'Hearts': 'red',
//     'Daimonds': 'red',
//     'Clubs': 'black',
//     'Spades': 'black'
// };

// export const PIPS_SUIT_MAP: StyleOptions<HTMLEntity> = {
//     'Hearts': '&#9829;',
//     'Daimonds': '&#9830;',
//     'Clubs': '&#9831;',
//     'Spades': '&#9831;',
// };

// [Tuesday 1:40 PM] Serhii Bilyk
// const mixingCards = (cards: CardInterface[], res: CardInterface[] = []): any => {
//     const index = Math.floor(Math.random() * cards.length);
//     const newArray = removeItemFromArray(cards, index);

//     if (newArray.length === 0) {
//         return res;
//     } else {
//         return mixingCards(newArray, [...res, cards[index]]);
//     }
// };

