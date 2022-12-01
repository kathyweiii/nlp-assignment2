import React, { useState } from "react";
// import { Content, Header, Navbar } from "../components/flashcard/Navbar";
import Navbar from "../components/flashcard//Navbar";
import Content from "../components/flashcard/Content";
import Header from "../components/flashcard/Header";

export default function Flashcard() {
  const vocabularies = [
    {
      word: "knotty",
      part_of_speech: "Adjective",
      definition:
        "(of a problem or difficulty) complicated and difficult to solve.",
      example: "It was a very knotty problem.",
    },
    {
      word: "cantrip",
      part_of_speech: "Noun",
      definition: "a magic spell; trick by sorcery.",
      example:
        "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
    },
    {
      word: "traverse",
      part_of_speech: "Verb",
      definition: "to pass or move over, along, or through.",
      example: "Stanley traversed the continent from west to east.",
    },
    {
      word: "peculiar",
      part_of_speech: "Adjective",
      definition: "different to what is normal or expected; strange.",
      example: "He gave her some very peculiar looks.",
    },
  ];

  //true: Home, false: Favorite
  const [homeOrFav, setHomeOrFav] = useState(true);
  const [starClicked, setStarClicked] = useState([false, false, false, false]);
  const [favVocab, setFavVocab] = useState([]);

  const handleStarClick = (id) => {
    const tempStarClicked = [...starClicked];
    tempStarClicked[id] = !tempStarClicked[id];
    setStarClicked(tempStarClicked);
    const favoriteList = [];
    for (var i = 0; i < starClicked.length; i++) {
      if (tempStarClicked[i]) {
        favoriteList.push(vocabularies[i]);
      }
    }
    setFavVocab(favoriteList);
  };

  const handleHomeClick = () => {
    setHomeOrFav(true);
    console.log("homeorFav: ", homeOrFav);
  };

  const handleFavClick = () => {
    setHomeOrFav(false);
    // console.log("homeorFav: ", homeOrFav);
  };

  const decideList = () => {
    return homeOrFav === true ? vocabularies : favVocab;
  };
  const chooseTitle = () => {
    return homeOrFav === true ? "My Flash Card" : "My Favorite";
  };

  return (
    <React.Fragment>
      <Navbar
        onHomeClick={handleHomeClick}
        onFavClick={handleFavClick}
        homeOrFav={homeOrFav}
      ></Navbar>
      <Header title={chooseTitle()} />
      <Content
        vocabularies={decideList()}
        onStarClick={handleStarClick}
        starClicked={starClicked}
        homeOrFav={homeOrFav}
      ></Content>
    </React.Fragment>
  );
}
