import React, { Component } from 'react';
import Row from './Row';
import GameList from './GameList';
import Leaders from './Leaders';

const gameStore = [];

const fetchTest = fetch('https://wger.de/api/v2/exercise/?limit=100&status=2&language=2&category=13').then((results) => results.json()).then((result) => console.log(result)).catch((err) => console.log(err.message));

function getInitialState() {
  return {
    rows: [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    turn: 'X',
    winner: undefined,
    gameList: gameStore,
  };
}

function checkWin(rows) {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const flattened = rows.reduce((acc, row) => acc.concat(row), []);

  return combos.find((combo) => (
    flattened[combo[0]] !== ''
    && flattened[combo[0]] === flattened[combo[1]]
    && flattened[combo[1]] === flattened[combo[2]]
  ));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = getInitialState();
  }

  handleClick(row, square) {
    let { turn, winner } = this.state;
    const { rows } = this.state;
    const squareInQuestion = rows[row][square];

    if (this.state.winner) return;
    if (squareInQuestion) return;

    rows[row][square] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    winner = checkWin(rows);

    this.setState({
      rows,
      turn,
      winner,
    });
  }

  render() {
    const {
      rows, turn, winner, gameList,
    } = this.state;
    const { handleClick } = this;

    const rowElements = rows.map((letters, i) => (
      <Row key={i} row={i} letters={letters} handleClick={handleClick} />
    ));

    let infoDiv;
    if (winner) {
      const winTurn = turn === 'X' ? 'O' : 'X';
      infoDiv = (
        <div>
          <div>
Player
            {' '}
            {winTurn}
            {' '}
wins with squares
            {' '}
            {winner.join(', ')}
!
          </div>
        </div>
      );
    } else {
      infoDiv = (
        <div>
Turn:
          {' '}
          {turn}
        </div>
      );
    }

    return (
      <div>
        {infoDiv}
        <div id="board">
          {rowElements}
        </div>
        <button id="reset" onClick={() => this.setState(getInitialState())}>Reset board</button>
        <GameList gameList={gameList} />
        <Leaders />
      </div>
    );
  }
}

export default App;
