import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card"


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

  // const [cards, setCards] = useState([])



  return (
    <div className="app">
      <GameHeader score={3} moves={5} />

      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card} />
            
        ))}
      </div>
    </div>
  )
}

export default App
