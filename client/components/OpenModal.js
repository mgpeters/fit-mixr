import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import shoulders from '../assets/icons/shoulders.png';
import legs from '../assets/icons/legs.png';
import chest from '../assets/icons/chest.png';
import back from '../assets/icons/back.png';
import core from '../assets/icons/abs.png';
import arms from '../assets/icons/arms.png';

function OpenModal(props) {

  return (
    <Modal
      {...props}
      show = { props.show }
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered={ true }
      autoFocus={ true }
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" >
          <h1 id="modal-header-text">Welcome to FitMixr!</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="modal-body">
          <h2 className="modal-body-text">What Are You Working Today?</h2>
          <div className="modal-body-selection">
            <button onClick={ props.selectWorkout }>
              <img id='13' src={shoulders}></img>
              <p>Shoulders</p>
            </button>
            <button onClick={ props.selectWorkout }>
              <img id='9' src={legs}></img>
              <p>Legs</p>
            </button>
            <button onClick={ props.selectWorkout } >
              <img id='11' src={chest}></img>
              <p>Chest</p>
            </button>
            <button onClick={ props.selectWorkout } >
              <img id='12' src={back}></img>
              <p>Back</p>
            </button>
            <button onClick={ props.selectWorkout } >
              <img id='10' src={core}></img>
              <p>Core</p>
            </button>
            <button onClick={ props.selectWorkout }>
              <img  id='8' src={arms}></img>
              <p>Arms</p>
            </button>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block
          disabled={ props.mixButtonStatus }
          onClick={ props.mixItFunction }>
          Mix-It!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OpenModal;