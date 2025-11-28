


export const GameHeader = ({ score, moves, resetGame }) => {
  return (
  <div className="game-header">
    <h1> Memory Game </h1>
    <div className="stats">
      <div className="stat-item">
        <span className="state-label">Score:</span>{""}
        <span className="state-value">{score}</span>
      </div>
      <div className="stat-item">
        <span className="state-label">Moves:</span>{""}
        <span className="state-value">{moves}</span>
      </div>
    </div>
    <button className="reset-btn" onClick={resetGame}>New Game</button>
  </div>
)};