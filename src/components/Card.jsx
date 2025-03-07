import { useState } from "react";

function Card(props) {
  // const [revealed, setRevealed] = useState(false);

  // What We Want To Acheive
  // function handleClick() {
  //   setRevealed((prev) => !prev);
  //   props.cardsClicked();
  // }

  return props.revealed.includes(props.id) ? (
    <>
      <p>{props.cardValue}</p>
    </>
  ) : (
    <>
      <div onClick={() => props.cardsClicked(props.id)}>
        <p>?</p>
      </div>
    </>
  );

  //   }

  return (
    <>
      <div onClick={() => props.cardsClicked(props.id)}>
        {/* {console.log(props.cardsClicked())} */}
        {/* {console.log(props.cardObject)} */}
        {props.revealed.includes(props.id) ? (
          <p>{props.cardValue}</p>
        ) : (
          <p>?</p>
        )}
      </div>
      {/*<div onClick={() => setRevealed(!revealed)}>
    </div> */}
    </>
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
