import React, { Component } from 'react';
import PriorWorkout from './PriorWorkout';

class PriorWorkouts extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    // console.log('priorWorkouts', this.props.priorWorkouts);

    const priorWorkoutGenArray = [];

    for (let i = 0; i < this.props.priorWorkouts.length; i += 1) {
      const keyName = Object.keys(this.props.priorWorkouts[i].workout);

        priorWorkoutGenArray.push(
          <PriorWorkout
            dateCompleted={ keyName }
            workoutData={ this.props.priorWorkouts[i].workout[keyName] }
            key={`prior-workout ${i}`}
            />
        );
    }


    return (
      <div>
        { priorWorkoutGenArray }
      </div>
    );
  }
}

export default PriorWorkouts;