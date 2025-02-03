import Card from "./Card";

// const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardList = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
];

function GameArea() {
  return (
    <div className="game-area">
      {cardList.map((cardObject) => {
        return <Card key={cardObject.id} cardProp={cardObject.value} />;
      })}
    </div>
  );
}

export default GameArea;

// function GameArea() {
//     return (
//       <>
//         {cardList.map((cardObject) => {
//           return (
//           <Card
//           key={cardObject.id}
//           cardProp={cardObject}
//           />
//           )
//         })}
//       </>
//     );
//   }
