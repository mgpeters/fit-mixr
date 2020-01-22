import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import shoulders from '../assets/icons/shoulders.png';

function OpenModal(props) {
  return (
    <Modal
      {...props}
      show = { props.show }
      size="lg"
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
          <div>
            <img src={shoulders}></img>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button
          block
          disabled={ props.mixButtonStatus }
          onClick={ props.onHide }>
          Mix-It!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OpenModal;