import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard.jsx'

function generateDeck() {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    const card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    }
    deck.push(card);
  }
  return shuffle(deck);
};

let shuffle = (deck) => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    let tmp = deck[i];
    deck[i] = deck[j];
    deck[j] = tmp;
  }
  return deck;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deck: generateDeck(), pickedCards: [] };
  };

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    };

    let cardToFlip = {...this.state.deck[cardIndex]};

    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title">Memory Game</h1>
          <h3 id="subtitle">Match Cards to Win</h3>
        </header>

        <div className="Board">
          <div>
            {cardsJSX.slice(0, 4)}
          </div>

          <div>
            {cardsJSX.slice(4, 8)}
          </div>

          <div>
            {cardsJSX.slice(8, 12)}
          </div>
          <div>
            {cardsJSX.slice(12, 16)}
          </div>
        </div>

      </div>
    );
  }
}
export default App;
