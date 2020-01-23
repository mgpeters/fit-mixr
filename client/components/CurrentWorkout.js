import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CurrentWorkout = (props) => {
  return (
    <div className="current-set-box">
      <Card>
        <Card.Header>{ props.workoutProperties.name }</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group>
                <Form.Label>Sets</Form.Label>
                <Form.Control as="select">
                  <option>6</option>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Reps</Form.Label>
                <Form.Control as="select">
                  <option>25</option>
                  <option>20</option>
                  <option>15</option>
                  <option>10</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="in lbs" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

CurrentWorkout.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default CurrentWorkout;