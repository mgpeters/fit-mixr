import React, { Component } from 'react';

const fetchTest = fetch('https://wger.de/api/v2/exercise/?limit=100&status=2&language=2&category=13').then((results) => results.json()).then((result) => console.log(result)).catch((err) => console.log(err.message));

const shuffleArray = (array) => {  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 1/22/2020
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
    return (
      <div>

      </div>
    );
  }
}

export default App;
