import React, { Component } from 'react';

import MainView from './MainView';
import OpenModal from './OpenModal';


const getRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true,
      workoutTypeId: [],
      mixButtonStatus: true,
      generatedWorkout: [],
      completedWorkout: {},
      numOfSets: 0
    }

    this.selectWorkout = this.selectWorkout.bind(this);
    this.mixItFunction = this.mixItFunction.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
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
      mixButtonStatus: false,
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
        const numOfSets = Math.floor(concatResults.length / 2);

        const randomWorkouts = getRandom(concatResults, numOfSets)

        this.setState({
          generatedWorkout: randomWorkouts,
          modalShow: false,
          numOfSets: numOfSets,
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  setCompleted(values) {
    console.log('eventTarget values', values)
    this.setState({
      completedWorkout: {
        ...this.state.completedWorkout,
        values,
      }
    });
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
        {
          this.state.modalShow ? '' :
          <MainView
            generatedWorkout={ this.state.generatedWorkout }
            workoutCompleted={ this.workoutCompleted }
            numOfSets={ this.state.numOfSets } 
            setCompleted={ this.setCompleted } />
        }
      </div>
    );
  }
}

export default App;
