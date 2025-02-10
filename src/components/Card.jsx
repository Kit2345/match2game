import { useState } from "react";

function Card(props) {
  const [revealed, setRevealed] = useState(false);

  return (
    // <div onClick={() => setRevealed(!revealed)}>
    <div onClick={() => props.cardsClicked()}>
      {/* {console.log(props.cardsClicked())} */}
      {/* {console.log(props.cardObject)} */}
      {revealed ? <p>{props.cardProp}</p> : <p>?</p>}
    </div>
  );
}

export default Card;

// What will this component do?
// Card component will be card -> value or card back?
// A game area component:

// App -> GameArea
//    pass in win/lose state
// GameArea-> Card
//    randomise list
//    map random list.
