# Be My Dev on Javascript basics through a game of "Taquin"

## Play rules

- The goal is to respond to the specifications in a given time (8h) by developing the expected feature.
- Each application is peer-reviewed based on the following criteria:
  - Project coding & presentation
    - Features (is everything there and working?)
    - Front-end
      - no bugs
      - aesthetics
      - branding
      - ergonomy
      - navigation
      - performances
      - code quality
  - A master card presentation

### Available "Master" cards

- Variables
- Functions
- Operators & ES6 operators
- Objects & objects functions
- Array's and array's functions
- Event listeners
- DOM
- Error management

## Specifications

### Technical

- One single HTML as `index.html` (provided)
- One single vanilla CSS as `styles.css` (provided)
- One single vanilla JS as `script.js`

### Functionnal

### Objective of the game of "Taquin"

Reorganize a set of numbered tiles so that they are in ascending order, leaving one empty space.
The player can move a tile only if it is adjacent to the empty space (horizontally or vertically).
The game is won when all the tiles are in the correct order.

#### UI / UX

##### Display

- The tiles must be presented in a grid, with one empty space.
- The tiles must be numbered from 1 to n-1 (where n is the total number of tiles).
- The empty space can be represented by a blank space or a specific symbol.
- A "New Game" button can be offered to (re)start a new game.

##### Interactions

- The user can click on a tile adjacent to the empty space to swap it with the empty space (drag & drop).

##### Visual Feedback

- When the user hovers over a movable tile, a slight visual effect can be added (e.g., a color change).
- When the user drops a tile on a valid space, a transition effect can be added to make the movement smoother.

##### End of Game

- When a game is won, a congratulatory message must be displayed to the user.

### Improvements

- A timer can be displayed to show the game duration in real time.
- A score can be calculated regarding the delay needed to finish the game.
- Results can be stored in the local storage.
- Visual animation effect when a tile is dropped after an invalid movement
- ...
