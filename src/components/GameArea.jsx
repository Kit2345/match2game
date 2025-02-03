import Card from "./Card";

// const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardList = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
];

function GameArea() {
  return (
    <>
      {cardList.map((cardObject) => {
        return <Card key={cardObject.id} cardProp={cardObject.value} />;
      })}
    </>
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
