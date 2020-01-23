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
      numOfSets: 0,
      currentDate: undefined,
      priorWorkouts: {},
    }

    this.selectWorkout = this.selectWorkout.bind(this);
    this.mixItFunction = this.mixItFunction.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.triggerMongoPost = this.triggerMongoPost.bind(this);
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
    const currentDate = new Date().toString().split(' ').slice(1, 4).join('-');

    this.retrieveWorkouts();

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
          currentDate: currentDate,
          generatedWorkout: randomWorkouts,
          modalShow: false,
          numOfSets: numOfSets,
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  setCompleted(values) {
    console.log('currentState', this.state.completedWorkout)
    const obj = {};
    obj[this.state.currentDate] = [];

    if (this.state.completedWorkout[this.state.currentDate]){
      obj[this.state.currentDate].push(...this.state.completedWorkout[this.state.currentDate]);//.push(this.state.completedWorkout[this.state.currentDate])
      obj[this.state.currentDate].push(values);
    } else {
      obj[this.state.currentDate].push(values);
    }

    this.setState({
      completedWorkout: obj,
    })
}

  postWorkout(currentState) {
    fetch('/api/addWorkout', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(currentState),
      }).then(res => res.json())
      .then((response) => {
        console.log('postWorkoutResponse COMPLETE', response);
      }).catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
  }

  retrieveWorkouts(){
    fetch('/api/getWorkouts')
    .then(res => res.json())
      .then((response) => {
        console.log('getWorkoutsResponse COMPLETE', response);
        this.setState({
          priorWorkouts: response,
        });
      }).catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
  }

  triggerMongoPost(){
    this.postWorkout(this.state.completedWorkout);
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
            setCompleted={ this.setCompleted }
            triggerMongoPost={ this.triggerMongoPost } />
        }
      </div>
    );
  }
}

export default App;
