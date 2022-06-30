interface Card {
    suit: string,
    name: string,
    value: number
}

const cardsCreating = (suit: string) => {
    let cards: Card[] = [];
    let name = '';

    for (let i = 2; i <= 14; i++) {
        switch (i) {
            case 11:
                name = 'J';
                break;
            case 12:
                name = 'Q';
                break;
            case 13:
                name = 'K';
                break;
            case 14:
                name = 'A';
                break;
            default:
                name = i.toString();
        }

        cards.push({
            suit,
            name,
            value: i
        });
    }

    return cards;
};

const rndGenerator = (cardsCount: number) => {
    let rnd = Math.floor(Math.random() * cardsCount);
    if (rnd > cardsCount) {
        rnd = 0;
    }

    return rnd;
};

const cardsPreparing = (cards: any) => {
    const internalCards = [...cards]
    const cardsBeginCount = cards.length; // 52
    let cardsCount: number = 0;
    let cardsList: Card[] = [];

    for (let index = 0; index < cardsBeginCount; index++) {
        cardsCount = cards.length;
        let rndIndex = rndGenerator(cardsCount);
        let card = cards[rndIndex];

        cardsList.push(card);
        cards.splice(rndIndex, 1);
    }

    return cardsList;
};


const Suits = [
    'Hearts',
    'Daimonds',
    'Spades',
    'Clubs'
] as const;

type Suite = typeof Suits[number]

let suit: Suite = 'Hearts'

const createDeck = () => Suits.reduce<Card[]>(
    (acc, elem) => acc.concat(cardsCreating(elem)),
    []
);



const cards = createDeck()

// const cardsMixed = cardsPreparing(1, 2, 3);

// console.clear();
// console.log(cardsMixed.length);

// const NAMED_CARDS = ["J", "D", "K", "A"];
// const ALL_CARDS = [
  // ...Array(9).fill(0).map((e, i) => String(i + 2)),
  // ...NAMED_CARDS
// ]

// const TYPES = [
  // 'Hearts',
  // 'Daimonds',
  // 'Spades',
  // 'Clubs'
// ]

// const ALL = []

// TYPES.forEach((type) => {
  // ALL.push(...ALL_CARDS.map(card => ({ name: `${type} - ${card}` })))
// }, []);

// console.log(ALL);

// Object.keys(obj).forEach(key => {
    // if(typeof obj[key] === "object") {
      // result[key] = cloneDeep(obj[key])
    // } else {
      // result[key] = obj[key]
    // }
  // })
  
  // return result
// }