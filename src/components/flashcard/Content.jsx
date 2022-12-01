import Card from "./Card";
import React from "react";

export default function Content({
  vocabularies,
  onStarClick,
  starClicked,
  homeOrFav,
}) {
  return (
    <div className="content">
      {vocabularies?.map((v, i) => (
        <div className="card" key={i}>
          <Card
            word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
            example={v.example}
            starClicked={starClicked[i]}
            onStarClick={onStarClick}
            id={i}
            homeOrFav={homeOrFav}
          />
        </div>
      ))}
    </div>
  );
}
