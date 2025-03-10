# Match 2 Card Game

This is our game I hope you like it.

## Ideas

Idea 1: Even number of cards that are pairs. Cards show face down and you click pairs until you find two that match.

Idea 2: Grid (i.e. 9) cards where only two of them match. You flip over pairs until you find the two that match. You get a point when you do, and the grid resests.

To strech there can be a time limit of how many you find in a set time.

## MVP Breakdown - Idea 2

### MVP 1

- Displays grid of 9 cards face down
- Click card it turns over
- Click second card it turns over
- There is a short pause so the player can see what both cards are
- If cards match, game resets
- If cards do not match, they turn face down again

Tasks:
DONE (click 1, click 2 -> when third click, will revert the previous two => so only 2 cards shown at once)
(Then add conditional of comparing and scoring) -> match = +1 point.
(Game board resets) -> scores carry over.
(Add pause if wanted before it automatically revert unless click before) -> wouldnt affect state, only cosmetic
Want to add anything else? (Add other cosmetics?)

### MVP 2

- As above but also:
- Score counter that adds one each time a pair is found
- Start button to click before the cards are 'dealt' onscreen

Task:
If not already done, then add state for running total/score
Make start button functional -> make use of reset function from previous MVP -> where gamearea is called inside a reset function. Maybe activate gamearea()? or change the randomarray state?

Or
SetRandomarray as blank array, so nothing displays. THen start button or reset button:
uses setRandomArray and fills it with makearrayuseable() -> sets up the array.

-> Function to start game (reset game board, hide cards, but leave scores as it is). Start new game -> re-use start game fucntion but also resets score

### MVP 3

- As above but also:
- Timer that counts down at start
- Game ends when timer hits zero - gives final score
- Possible animations or UI elements
- Change the value of the pair the player is trying to match

## Code Notes

### MVP 1

- Map out list, maybe a card component that maps out
- Needs to be randomised
- Cards display correct way (i.e. start face down and can flip)
- State tracks how many cards turned over
- Think about how to pause cards - does it wait for next click
- State that tracks 'win' and then resets grid
