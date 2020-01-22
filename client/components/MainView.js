import React, { Component } from 'react';
import PriorWorkouts from './PriorWorkouts';
import CurrentWorkouts from './CurrentWorkouts';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MainView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="mainview-wrapper">
        <Container>
          <Row>
            <Col>
              <PriorWorkouts />
            </Col>
            <Col>
              <CurrentWorkouts
                generatedWorkout={ this.props.generatedWorkout }
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default MainView;
