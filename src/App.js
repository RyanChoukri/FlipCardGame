import React from "react";
import "./styles.css";
import FlipGameContainers from "./containers/FlipGameContainer";
import listFlipData from "./cardList.json";

const getShuffledArr = arr => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const generatedId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

const generateList = () => {
  const flipcards = getShuffledArr(listFlipData.concat(listFlipData));
  return flipcards.map(e => {
    const freezeObj = Object.assign({}, e);
    freezeObj.id = generatedId();
    freezeObj.fliped = false;
    return freezeObj;
  });
};

export default function App() {
  return <FlipGameContainers listFlipData={generateList()} />;
}
