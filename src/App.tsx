import { useState } from 'react';
import { getRandomWord } from './common';
import Board from './components/Board';
import Hints from './components/Hints';

function App() {
  const [word] = useState<string>(getRandomWord());

  return (
    <div>
      <Hints randomWord={word}/>
      <Board randomWord={word}/>
    </div>
  );
}

export default App;
