// Here you can access all the states

import { useEffect, useState } from "react";



export const useGameLogic = (cardValues) => {
  
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false)



  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const initializeGame = () => {

    // Shuffle Cards
    const shuffled = shuffleArray(cardValues)

    const finalCards = shuffled.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ));

    setCards(finalCards);
    setIsLocked(false)
    setMoves(0);
    setScore(0);
    setMatchedCards([]);
    setFlippedCards([]);
  };

  useEffect(() => {
    initializeGame();
  }, []);


  const handleCardClick = (card) => {
    // Check if card is already matched or flipped, so don't allow
    if (card.isFlipped || card.isMatched || isLocked || flippedCards.length === 2) {
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
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]]

      if (card.value === firstCard.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1)
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
          setIsLocked(false)
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
          setIsLocked(false)
        }, 500)
      }
      setMoves((prev) => prev + 1)
    }
  };

  const isGameComplete = matchedCards.length === cardValues.length

  return {cards, score, moves, isGameComplete, initializeGame, handleCardClick}
}