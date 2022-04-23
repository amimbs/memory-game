import './App.css';
import MemoryCard from './components/MemoryCard.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3 id="subtitle">Match Cards to Win</h3>
        
          <div className="Board">
            <div>
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
            </div>

            <div>
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
            </div>

            <div>
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
            </div>
            
            <div>
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
              <MemoryCard />
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
