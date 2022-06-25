import React from 'react';
// import './App.css';

function App() {const cardsCreating = ( suit: string ): any => {
    let cards: { suit: string, name: string, value: number }[] = [];
    let name: string = '';

    for (let i = 2; i <= 14; i++) {
        switch ( i ) {
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

const rndGenerator = ( cardsCount: number ): number => {
    let rnd: number = Math.floor(Math.random() * cardsCount);
    if (rnd > cardsCount) {
        rnd = 0;
    }

    return rnd;
};

const cardsPreparing = ( cards: any ): any => {    
    const cardsBeginCount = cards.length;
    let cardsCount: number = 0;
    let cardsList: { suit: string, name: string, value: number }[] = [];

    for (let index = 0; index < cardsBeginCount; index++) {
        cardsCount = cards.length;
        let rndIndex = rndGenerator(cardsCount);
        let card = cards[rndIndex];

        cardsList.push(card);
        cards.splice(rndIndex, 1);
    }

    return cardsList;
};

const cards = [].concat(cardsCreating('hearts'), cardsCreating('daimonds'), cardsCreating('spades'), cardsCreating('clubs'));
const cardsMixed = cardsPreparing(cards);

console.clear();
console.log(cardsMixed);
	
  return (
    <div className="App">
		OK
    </div>
  );
}

export default App;
