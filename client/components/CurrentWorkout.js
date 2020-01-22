import React from 'react';
import PropTypes from 'prop-types';

const CurrentWorkout = (props) => {
  return (
    <div id="gameList">
      <h3>Past matches</h3>
      <ul>
        {listElements}
      </ul>
    </div>
  );
};

CurrentWorkout.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default CurrentWorkout;