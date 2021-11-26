import './App.css';

import Game from './components/Game'
import { GlobalStyle } from './GlobalStyle';

function App() {
  const playerId = Math.floor(Math.random()*100000);

  return (
    <div className="App">
      <Game playerId={playerId}></Game>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
