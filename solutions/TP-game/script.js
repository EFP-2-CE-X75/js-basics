/**
 * Taquin Puzzle Game
 * 
 * @author Steve Lebleu <steve@konfer.be>
 * @copyright Steve Lebleu
 * @url https://www.konfer.be
 * @license MIT
 */
(function () {
  const container = document.getElementById('grid-container');
  const button = document.getElementById('btn-start');
  
  const GRID_SIZE = 4; // Grid size (4x4)
  const TILE_CLASSNAME = 'grid-tile';
  
  /**
   * Initialize tiles grid
   */
  function init() {
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      if (i === GRID_SIZE * GRID_SIZE - 1) {
        fragment.appendChild(create(''));
        continue;
      }
      const tile = create(i + 1);
      fragment.appendChild(tile);
    }
  
    container.appendChild(fragment);
  }
  
  /**
   * Create a tile
   * 
   * @param {*} value Number to display on the tile
   * 
   * @returns {HTMLElement} The tile element
   */
  function create(value) {
    if (!value && value !== '' || isNaN(value)) {
      throw new Error('Value must be a number or an empty string');
    }
  
    const tile = document.createElement('div');
    
    tile.classList.add(TILE_CLASSNAME);
    tile.textContent = value;
    tile.draggable = true;
  
    return tile;
  }
  
  /**
   * Shuffle tiles
   */
  function shuffle() { 
    const tiles = Array.from(container.children);
  
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]]; // Switch elements
    }
  
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < tiles.length; i++) {
      fragment.appendChild(tiles[i]);
    }
  
    container.appendChild(fragment);
  }
  
  /**
   * Validate that a tile can be moved, so only tiles that are adjacent to the empty tile can be moved
   * 
   * @param {*} originIndex Index of the tile to move 
   * 
   * @returns {Boolean} True if tile is eligible, false otherwise
   */
  function canMove(originIndex) {
    const tiles = Array.from(container.children);
    const emptyIndex = tiles.findIndex(t => t.textContent === '');
  
    // Calculating row and column indices (assuming a square grid)
    const getRow = (index) => Math.floor(index / GRID_SIZE);
    const getCol = (index) => index % GRID_SIZE;
  
    const rowDiff = Math.abs(getRow(emptyIndex) - getRow(originIndex));
    const colDiff = Math.abs(getCol(emptyIndex) - getCol(originIndex));
  
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  }
  
  /**
   * Validate that the movement is valid
   * 
   * @param {*} originIndex Index of the tile to move 
   * @param {*} targetIndex Index of the target tile
   * 
   * @returns {Boolean} True if the movement is valid, false otherwise
   */
  function isValidMovement(originIndex, targetIndex) {
    const tiles = Array.from(container.children);
    const emptyIndex = tiles.findIndex(t => t.textContent === '');
  
    return canMove(originIndex) && targetIndex === emptyIndex;
  }
  
  /**
   * Apply the movement
   * 
   * @param {*} originIndex Index of the tile to move
   * @param {*} targetIndex Index of the target tile
   * 
   */
  function move(originIndex, targetIndex) {
    const tiles = Array.from(container.children);
  
    const targetContent = tiles[targetIndex].textContent;
    const originContent = tiles[originIndex].textContent;
  
    tiles[originIndex].textContent = targetContent;
    tiles[targetIndex].textContent = originContent;
  }
  
  /**
   * Indicates if the puzzle is solved
   * 
   * @returns {Boolean} True if the puzzle is solved, false otherwise
   */
  function isSolved() {
    return Array
      .from(container.children)
      .every((tile, index) => tile.textContent === (index + 1).toString());
  }
  
  /**
   * Entry point
   */
  function main() {
    try {
      // Check if the browser supports drag and drop
      if (!('draggable' in document.createElement('div'))) {
        throw new Error('Your browser does not support drag and drop');
      }
  
      // Initialize the tiles grid
      init();
  
      // Shuffle the tiles
      shuffle(); 
  
      /**
       * Add dragstart event listener to the container using event delegation.
       * 
       * This event is fired when the user starts dragging an element.
       */
      container.addEventListener('dragstart', (event) => {
        if (event.target.textContent === '' || !canMove(Array.from(container.children).findIndex(tile => tile.textContent === event.target.textContent))) {
          event.preventDefault();
          return;
        }
  
        event.dataTransfer.setData('text/plain', event.target.textContent);
      });
  
      /**
       * Add dragover event listener to the container using event delegation.
       * 
       * This event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
       */
      container.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
  
      /**
       * Add drop event listener to the container using event delegation.
       * 
       * Each time a tile is dropped, we mostly check if the movement is valid, and if so, we apply it.
       * 
       * Since it's the only way to move the tiles, we also check if the puzzle is solved.
       */
      container.addEventListener('drop', (event) => {
        event.preventDefault();
  
        const data = event.dataTransfer.getData('text/plain');
  
        const tiles = Array.from(container.children);
  
        const originIndex = tiles.findIndex(tile => tile.textContent === data);
        const targetIndex = tiles.indexOf(event.target);
  
        if (isValidMovement(originIndex, targetIndex)) {
          move(originIndex, targetIndex);
        }
  
        if (isSolved()) { alert('Bravo !'); }
      });
  
      /**
       * Add mouseover event listener to the container using event delegation.
       * 
       * This event is fired when the mouse pointer enters the tile.
       * 
       * If the target is a tile, we check if the movement is valid.
       * If so, we add the class 'draggable'.
       */
      container.addEventListener('mouseover', (event) => {
        if (event.target.matches(`.${TILE_CLASSNAME}`)) {
  
          const originIndex = Array
            .from(container.children)
            .findIndex(tile => tile.textContent === event.target.textContent);
  
          if (canMove(originIndex)) {
            event.target.classList.add('draggable');
          }
        }
      });
  
      /**
       * Add mouseout event listener to the container using event delegation.
       * 
       * This event is fired when the mouse pointer leaves the tile.
       * 
       * If the target is a tile, we remove the class 'draggable'.
       */
      container.addEventListener('mouseout', (event) => {
        if (event.target.matches(`.${TILE_CLASSNAME}`)) {
          event.target.classList.remove('draggable');
        }
      });
  
      // Add click event listener to the button to shuffle the tiles when the button is clicked
      button.addEventListener('click', shuffle);
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  }
  
  // Wait for the DOM to be fully loaded before running the main function
  document.addEventListener('DOMContentLoaded', main);
  
  // Handle unmanaged errors
  window.onerror = function (message, source, lineno, colno, error) {
    console.error(message, source, lineno, colno, error);
    alert('An error occurred, please accept our apologies.');
  };
})(window, document);
