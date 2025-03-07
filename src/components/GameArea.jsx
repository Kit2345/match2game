import { useState } from "react";
import Card from "./Card";

// const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cardList = [
//   { id: 1, value: 1 },
//   { id: 2, value: 2 },
//   { id: 3, value: 3 },
//   { id: 4, value: 4 },
//   { id: 5, value: 5 },
//   { id: 6, value: 6 },
//   { id: 7, value: 7 },
//   { id: 8, value: 8 },
//   { id: 9, value: 9 },
// ];

function createRandomArray() {
  const basicArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const random = Math.floor(Math.random() * 8);
  basicArray.push(basicArray[random]);
  return basicArray;
}

function makeArrayUsable() {
  // call createRandomArray
  // randomise the list
  // turn list into id: 1, value: [id-1]
  const newCardArray = createRandomArray();
  for (let i = newCardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [newCardArray[i], newCardArray[j]] = [newCardArray[j], newCardArray[i]];
  }
  // for (let i = 0; i < newCardArray.length; i++) {
  //   newCardArray[i] = { id: i, cardValue: newCardArray[i] };
  //}
  return newCardArray.map((value, index) => ({ id: index, cardValue: value }));
}

function GameArea() {
  // const [cardsClicked, setCardsClicked] = useState(0);
  const [randomArray, setRandomArray] = useState(() => makeArrayUsable());
  const [revealed, setRevealed] = useState([]);

  function handleClick(id) {
    // if (cardsClicked < 2) {
    //   setCardsClicked(cardsClicked + 1);
    // } else setCardsClicked(1);
    // console.log(`Clicked ${cardsClicked}`);
    // // setCarsClicked((prev) => (prev < 2 ? prev + 1 : 1));
    // setRevealed([...revealed, id]);

    if (revealed.length === 2) {
      setTimeout(() => setRevealed([id]), 1000);
    } else setRevealed([...revealed, id]);
  }

  return (
    <>
      <div className="game-area">
        {randomArray.map((cardObject) => {
          return (
            <Card
              key={cardObject.id}
              cardValue={cardObject.cardValue}
              cardsClicked={handleClick}
              revealed={revealed}
              id={cardObject.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default GameArea;
