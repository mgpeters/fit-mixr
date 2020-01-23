import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const PriorWorkout = (props) => {

  const priorWorkoutData = [];

  for (let i = 0; i < props.workoutData.length; i += 1) {
    priorWorkoutData.push(
      <div key={`cardBody${i}`}>
        <p><span className="bold underline">{props.workoutData[i].workoutName}</span>:</p>
        <p>
          <span><span className="bold">Sets: </span> {props.workoutData[i].sets}  </span>
          <span><span className="bold">Reps: </span>{props.workoutData[i].reps}  </span>
          <span><span className="bold">Weight: </span>{props.workoutData[i].weight}lbs</span>
        </p>
      </div>
      )
  }

  return (
    <div className="prior-workout-card">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                { props.dateCompleted }
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                { priorWorkoutData }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    </div>
  );
};

PriorWorkout.propTypes = {
};

export default PriorWorkout;