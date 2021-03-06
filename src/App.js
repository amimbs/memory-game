import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard.jsx';

function generateDeck() {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    const card = {
      isFlipped: false,
      symbol: symbols[i % 8]
    };
    deck.push(card);
  };
  return shuffle(shuffle(deck));
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

    let cardToFlip = { ...this.state.deck[cardIndex] };

    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      };
      return card;
    });

    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];

      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
      };
      newPickedCards = [];
    };


    /////////////////////////////////////////////////////////////////////////////
    let flipped = newDeck.every((element) => {
      return element.isFlipped === true
    });

    if(flipped) {
      //there were none left to flip
      //user win message
      alert('NICE JOB! Refresh to play again!')
    };
    ///////////////////////////////////////////////////////////////////////////////


    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  };

  unflipCards(card1Index, card2Index) {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;

    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      };
      if (card2Index === index) {
        return card2
      };
      return card;
    });
    this.setState({ deck: newDeck });
  };

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 id="title">Memory Game</h1>
          <h3 id="subtitle">Match Cards to Win</h3>


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
        </header>
      </div>
    );
  };
};

export default App;
