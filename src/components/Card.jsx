function Card(props) {
  return (
    <>
      {/* {console.log(props.cardObject)} */}
      <p>{props.cardProp}</p>
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
