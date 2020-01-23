import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const PriorWorkout = (props) => {

  const priorWorkoutData = [];

  for (let i = 0; i < props.workoutData.length; i += 1) {
    priorWorkoutData.push(
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                { props.dateCompleted }
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>{props.workoutData[i].workoutName}</p>
                <p>Sets: {props.workoutData[i].sets}</p>
                <p>Reps: {props.workoutData[i].reps}</p>
                <p>Weight: {props.workoutData[i].weight}lbs</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )
  }

  return (
    <div className="prior-workout-card">
      { priorWorkoutData }
    </div>
  );
};

PriorWorkout.propTypes = {
};

export default PriorWorkout;