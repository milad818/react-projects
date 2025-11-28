import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"
import { useEffect, useState } from "react";


const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const initializeGame = () => {
    // Shuffle Cards

    // console.log(cardValues);

    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ));

    // console.log(finalCards);

    setCards(finalCards);

  };

  useEffect(() => {
    initializeGame();
  }, []);


  const handleCardClick = (card) => {
    // Check if card is already matched or flipped, so don't allow
    if (card.isFlipped || card.isMatched) {
      return;
    }

    // Looks into all cards and sets isFlipped to True for the clicked card
    // The updated array will be loaded into newCards
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        // console.log(`Check if flipped: ${c.isFlipped}`);
        return { ...c, isFlipped: true };   //  Sets only isFlipped to true for c (that specific card)
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id]
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]]

      if (card.value === firstCard.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          
          // Access the most recent state (cards) through a callback function using prev arg
          setCards((prev) => prev.map((c) => {
              // if id equal to the first card or the second which is just clicked (card), set isMatched to true
              if (c.id === card.id || c.id === firstCard.id) {
                // console.log(`Check if matched: ${c.isMatched}`);
                return { ...c, isMatched: true };   //  Sets only isMatched to true for c (that specific card)
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);
        }, 500);


    } else {
      setTimeout(() => {
        // Now we know they don't match, so we have to flip them both back
        // Walk thoughout the array, and set isFlipped false for those with the same id in newFlippedCards
        const flippedBackCard = newCards.map((c) => {
          if (newFlippedCards.includes(c.id) || c.id === card.id) {
            return { ...c, isFlipped: false };
          } else {
            return c
          }
        })
        setCards(flippedBackCard);

        // Set flippedCards to [], otherwise, its length will exceed 1
        setFlippedCards([]);
      }, 1000)

    }


  }
};

return (
  <div className="app">
    <GameHeader score={3} moves={5} />

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card={card} onClick={handleCardClick} />


      ))}
    </div>
  </div>
)
}

export default App
