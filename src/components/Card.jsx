import { useState } from "react";

function Card(props) {
  const [count, setCount] = useState(false);

  return (
    <p onClick={() => setCount(!count)}>
      {/* {console.log(props.cardObject)} */}
      {count ? 
      <p>{props.cardProp}</p>
      :
      <p>?</p>}
    </p>
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
