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

### MVP 2

- As above but also:
- Score counter that adds one each time a pair is found
- Start button to click before the cards are 'dealt' onscreen

### MVP 3

- As above but also:
- Timer that counts down at start
- Game ends when timer hits zero - gives final score
- Possible animations or UI elements

## Code Notes

### MVP 1

- Map out list, maybe a card component that maps out
- Needs to be randomised
- Cards display correct way (i.e. start face down and can flip)
- State tracks how many cards turned over
- Think about how to pause cards - does it wait for next click
- State that tracks 'win' and then resets grid
