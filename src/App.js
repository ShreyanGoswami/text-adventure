import './App.css';

import Game from './components/Game'
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Game></Game>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
