import React, { useEffect, useState } from "react";
import Hint from "./Hint";
import Slider from "./Slider";

interface HintsProps {
  randomWord?: string;
}

export default function Hints(randomWord: HintsProps) {

  const word = randomWord.randomWord;

  const[soundsLike, setSoundsLike] = useState("");
  const[synonym, setSynonym] = useState("");
  const[rhymesWithA, setRhymesWithA] = useState("");
  const[rhymesWithB, setRhymesWithB] = useState("");
  const[rhymesWithC, setRhymesWithC] = useState("");


  const fetchUserData = () => {
    fetch(`https://api.datamuse.com/words?sl=${word}`).then((response) => {
      return response.json()
    }).then((data) => {
      setSoundsLike(data[4].word)
    });

    fetch(`https://api.datamuse.com/words?ml=${word}`).then((response) => {
      return response.json()
    }).then((data) => {
      setSynonym(data[4].word)
    });

    fetch(`https://api.datamuse.com/words?rel_rhy=${word}`).then((response) => {
      return response.json()
    }).then((data) => {
      setRhymesWithA(data[4].word)
      setRhymesWithB(data[3].word)
      setRhymesWithC(data[2].word)
    });
  }

  useEffect(() => {
      fetchUserData()
  }, [])
  

  return (
    <div className="hints">
      <Hint message="Sounds Like..." content={soundsLike}></Hint>
      <Hint message="Synonym..." content={synonym}></Hint>
      <Hint message="Rhymes With..." content={rhymesWithA}></Hint>
      <Hint message="Rhymes With..." content={rhymesWithB}></Hint>
      <Hint message="Rhymes With..." content={rhymesWithC}></Hint>
    </div>
  );
}
