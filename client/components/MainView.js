import React, { Component } from 'react';
import PriorWorkouts from './PriorWorkouts';
import CurrentWorkouts from './CurrentWorkouts';

class MainView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <PriorWorkouts />
        <CurrentWorkouts />
      </div>
    );
  }
}

export default MainView;
