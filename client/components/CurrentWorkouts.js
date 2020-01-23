import React, { Component } from 'react';
import CurrentWorkout from './CurrentWorkout';

class CurrentWorkouts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const workoutGenArray = [];

    console.log(this.props.generatedWorkout)

    for (let i = 0; i < this.props.numOfSets; i += 1) {
      console.log('name', this.props.generatedWorkout[i].name)
      if (this.props.generatedWorkout[i].name !== undefined) {
        workoutGenArray.push(
          <CurrentWorkout
            workoutProperties={ this.props.generatedWorkout[i] }
            workoutCompleted={ this.props.workoutCompleted }
            key={`workout ${i}`}
            setCompleted={ this.props.setCompleted } />
        );
      }
    }
    console.log('workoutGenArray', workoutGenArray)

    return (
      <div>
        <h3>Current Workout</h3>
        { workoutGenArray }
      </div>
    );
  }
}

export default CurrentWorkouts;