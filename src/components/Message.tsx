import React from "react";

import { TypeAnimation } from "react-type-animation";

import "/Users/bodhaanshravipati/wordle-test/tutorial-react-wordle-completed/src/index.css";

interface MessageProps {
  message?: string;
}

export default function Message({ message }: MessageProps) {
  return (
    <div className="message">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          `${message}`,
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "",
        ]}
        wrapper="span"
        speed={25}
        repeat={0}
      />
    </div>
  );
}
