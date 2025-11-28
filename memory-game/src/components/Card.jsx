


export const Card = ({ card, onClick }) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}
    ${card.isMatched ? "matched" : ""}`}
      // Arrow function prevents immediate execution during render
      // Need a way to pass card as an argument, which requires wrapping
      onClick={() => onClick(card)}> 
      <div className="card-front">
        ?
      </div>
      <div className="card-back">
        {card.value}
      </div>
    </div>
  )
}