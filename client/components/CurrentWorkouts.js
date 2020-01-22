import React, { Component } from 'react';
import CurrentWorkout from './CurrentWorkout';

class CurrentWorkouts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const workoutGenArray = [];

    for (let i = 0; i < 6; i += 1) {
      workoutGenArray.push(<CurrentWorkout workoutProperties={ this.props.generatedWorkout[i] } key={`workout ${i}`} />);
    }

    return (
      <div>
        <h3>Current Workout</h3>
        { workoutGenArray }
      </div>
    );
  }
}

export default CurrentWorkouts;