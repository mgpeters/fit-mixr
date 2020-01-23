import React, { Component } from 'react';
import CurrentWorkout from './CurrentWorkout';

import Button from 'react-bootstrap/Button';

class CurrentWorkouts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const workoutGenArray = [];

    for (let i = 0; i < this.props.numOfSets; i += 1) {
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

    return (
      <div>
        <h1>Todays Workout</h1>
        { workoutGenArray }
        <Button
          block
          onClick={ this.props.triggerMongoPost }
          type="submit">
          Workout Completed
        </Button>
      </div>
    );
  }
}

export default CurrentWorkouts;