import React, { useState, useEffect } from "react";
import CardComponent from "../components/CardComponent";

const FlipGameContainers = ({ listFlipData }) => {
  const [state, setState] = useState({
    cards: listFlipData,
    gameTurn: 1,
    isWinned: false
  });

  useEffect(() => {
    if (!state.isWinned && !state.cards.find(card => !card.win)) {
      setState({ ...state, isWinned: true });
    }
  }, [state]);

  const viewFlipCard = id => {
    const cardsUpdate = state.cards.map(card => {
      const copyCard = { ...card };
      if (copyCard.id === id) copyCard.fliped = true;
      return copyCard;
    });
    setState({ ...state, cards: cardsUpdate });
    return cardsUpdate;
  };

  const toogleFlipCard = (id, cardsUpdate) => {
    let indexWin = "";

    const cardsToUpdate = cardsUpdate.map(card => {
      const copyCard = { ...card };
      if (copyCard.id === id) {
        const res = cardsUpdate.find(
          cardFind =>
            cardFind.content === card.content && cardFind.id !== card.id
        );

        if (res.fliped) {
          copyCard.win = true;
          copyCard.fliped = true;
          indexWin = res.id;
        }
      }
      return copyCard;
    });

    if (indexWin) {
      const cardWin = cardsToUpdate.find(res => res.id === indexWin);
      cardWin.win = true;
      cardWin.fliped = true;
    }

    if (state.gameTurn === 2 && !indexWin) {
      cardsToUpdate.map(card => {
        if (!card.win) card.fliped = false;
        return card;
      });
    }
    setTimeout(() => {
      setState({
        ...state,
        cards: cardsToUpdate,
        gameTurn: state.gameTurn < 2 ? 2 : 1
      });
    }, 500);
  };

  const handleChange = id => {
    const cardUpdate = viewFlipCard(id);
    toogleFlipCard(id, cardUpdate);
  };

  const generateCards = () => {
    return Array.from(state.cards).map((cardInfo, id) => {
      return (
        <CardComponent
          key={id}
          handleChange={handleChange}
          cardInfo={cardInfo}
        />
      );
    });
  };

  return (
    <div className="App">
      <h1>Flip Game</h1>
      {state.isWinned && <h2>Victory !!!</h2>}
      {generateCards()}
    </div>
  );
};

export default FlipGameContainers;
