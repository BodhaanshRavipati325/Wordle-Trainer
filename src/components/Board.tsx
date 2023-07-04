import { useEffect, useState } from 'react';
import { getRandomWord, update } from '../common';
import type { CellData } from '../types';
import Message from './Message';
import Row from './Row';

interface BoardProps {
  randomWord?: string;
}

export default function Board({ randomWord }: BoardProps) {
  
  if (randomWord == null) {
    randomWord = "";
  }

  const word = randomWord;
  const [rows, setRows] = useState<CellData[][]>([[]]);

  const [message, setMessage] = useState<string>("Random Word Selected");

  fetch(`https://api.datamuse.com/words?sl=${word}`).then((response) => {
      return response.json
    }).then((data) => {
      setMessage(Object.keys(data)[0]);
    });

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      setRows((prev) => update(e.key, word, prev));
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="board">
      <Row data={rows[0]} />
      <Row data={rows[1]} />
      <Row data={rows[2]} />
      <Row data={rows[3]} />
      <Row data={rows[4]} />
      <Row data={rows[5]} />

      <Message message={message}></Message>
    </div>
  );
}
