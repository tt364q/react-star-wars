import './App.css';
import { useState, useEffect } from 'react';
import { getStarShips } from './services/sw-api.js'
import StarShipCard from './components/StarShipCard/StarShipCard'

function App() {

  const [starShipData, setStarShipData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  async function getAppData() {
    const data = await getStarShips();
    setStarShipData(data);
  }

  useEffect(() => {
    getAppData();
    console.log('effect')
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> STAR WARS STARSHIPS</h1>
      </header>
      <div className="Cards">
        {starShipData.results.map((result, idx) => (
          <StarShipCard key={idx} result={result} />
        ))}
      </div>
    </div>
  );
}

export default App;
