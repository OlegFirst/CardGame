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






// getColor = s => s.match('Heart}Diamonds') ? 'red' : blck''

// Clear code

// Strategy pattern
// const obj = {
	// Hearts: '&value'
// }



// splice mutue
// slice ne mutue

// [1:30 PM] Serhii Bilyk
    // const list = [1, 2, 3, 4,5]
// const removeElement = (list: number[], index: number) => {​
// const head = list.slice(0, 2) // [1,2]
// const tail = list.slice(index + 1); [4]
    // console.log({​head, tail}​)
// return head.concat(tail)
// }​
// const result = removeElement(list, 2)
// console.log({​list, result}​)
