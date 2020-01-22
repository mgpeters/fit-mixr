import React, { Component } from 'react';

import MainView from './MainView';
import OpenModal from './OpenModal';
// import Button from 'react-bootstrap/Button';

//import 'bootstrap/dist/css/bootstrap.min.css';

// const fetchTest = fetch('https://wger.de/api/v2/exercise/?limit=100&status=2&language=2&category=13').then((results) => results.json()).then((result) => console.log(result)).catch((err) => console.log(err.message));

const shuffleArray = (array) => {  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 1/22/2020
    console.log('prior to shuffle', array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  console.log('after shuffle', array);
  return array;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true,
      workoutTypeId: [],
      mixButtonStatus: true,
      generatedWorkout: null,
    }

    this.selectWorkout = this.selectWorkout.bind(this);
    this.mixItFunction = this.mixItFunction.bind(this);
  }

  setModalShow(param) {
    this.setState({ modalShow: param });
  }

  selectWorkout(event) {
    const workoutType = this.state.workoutTypeId;
    workoutType.push(event.target.id);

    console.log(event.target)

    const selection = document.getElementById(event.target.id);

    selection.style.border = '3px solid grey';

    this.setState({
      workoutTypeId: workoutType,
      mixButtonStatus: false
    });
  }

  mixItFunction() {
    const promiseArray = [];

    this.state.workoutTypeId.forEach((id) => {
      promiseArray.push(fetch(`https://wger.de/api/v2/exercise/?limit=100&status=2&language=2&category=${id}`)
        .then((results) => results.json())
          .then((result) => result.results.slice(0, 5))
            .catch((err) => console.log(err.message)))
    });

    Promise.all(promiseArray)
      .then((result) => {
        const concatResults = result.reduce((acc, val) => [...acc, ...val]);

        this.setState({
          generatedWorkout: concatResults,
          modalShow: false,
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  // componentDidMount() {
  //   setModalShow(true);

  render() {

    return (
      <div>
        <OpenModal
          show={ this.state.modalShow }
          onHide={() => this.setModalShow(false)}
          mixButtonStatus={ this.state.mixButtonStatus }
          selectWorkout={ this.selectWorkout }
          mixItFunction={ this.mixItFunction }
        />
      </div>
    );
  }
}

export default App;
