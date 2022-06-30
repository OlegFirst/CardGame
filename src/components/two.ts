interface Card {
    suit: string,
    name: string
};

const Suits = [
    'Hearts',
    'Daimonds',
    'Spades',
    'Clubs'
] as const;

const NAMED_CARDS = ["J", "D", "K", "A"];

const ALL_CARDS = [
  ...Array(9).fill(0).map((e, i) => String(i + 2)),
  ...NAMED_CARDS
];

const deckCreating = (suit: string) => (
    ALL_CARDS.map(item => (
        {
            suit,
            name: item
        }
    ))
);

const deckPreparing = (cards: Card[]) => (
   cards
   .map(item => ({ item, sort: Math.random() }))
   .sort((a, b) => a.sort - b.sort)
   .map(({ item }) => item)
);

const deckCreates = () => Suits.reduce<Card[]> (
    (acc, elem) => acc.concat( deckCreating(elem) ),
    []
);

console.clear();
console.log(deckPreparing(deckCreates()));