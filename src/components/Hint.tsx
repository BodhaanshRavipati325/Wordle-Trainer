import React from "react";
import Slider from "./Slider";

interface HintProps {
  message?: string;
  content?: string;
}

export default function Hint({ message, content }: HintProps) {
  return (
    <>
    <div>
      <Slider message={message}></Slider>
      <div className="content">{content}</div>
    </div>
    </>
  );
}
