import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';

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
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OpenModal;