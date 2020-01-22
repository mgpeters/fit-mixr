import React from 'react';
import PropTypes from 'prop-types';



const CurrentWorkout = (props) => {
  return (
    <div className="current-set-box">
      <p>{ props.workoutProperties.name }</p>
    </div>
  );
};

CurrentWorkout.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default CurrentWorkout;