import Button from "./Button";
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export default function Card({
  word,
  part_of_speech,
  definition,
  example,
  onStarClick,
  starClicked,
  id,
  homeOrFav,
}) {
  const [exampleClicked, setExampleClicked] = useState(false);

  const handleExampleClick = () => {
    setExampleClicked(!exampleClicked);
    console.log("example Click");
  };

  const starColorChange = () => {
    return starClicked === true ? "orange" : "gray";
  };

  const exampleList = () => {
    return exampleClicked === true ? example : [];
  };

  let starButton;
  if (homeOrFav) {
    starButton = (
      <Button className={"icon-button"}>
        <FaStar
          // icon={FaStar}
          className="fa-star"
          color={starColorChange()}
          id={`star-${id}`}
          onClick={() => onStarClick(id)}
        />
      </Button>
    );
  } else starButton = null;

  return (
    <>
      <div className="vocabulary">
        {starButton}
        <h2 className="word">{word}</h2>
        <h4>{part_of_speech}</h4>
      </div>
      <h3 className="definition">{definition}</h3>
      <Button
        className={"example-button"}
        text={"Example"}
        onClick={() => handleExampleClick()}
      ></Button>
      {exampleList()}
    </>
  );
}
