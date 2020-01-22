import React from 'react';
import PropTypes from 'prop-types';

const PriorWorkout = (props) => {
  return (
    <div id="gameList">
      <h3>Past matches</h3>
      <ul>
      </ul>
    </div>
  );
};

PriorWorkout.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default PriorWorkout;