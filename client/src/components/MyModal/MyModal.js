import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = props => {
  return (
    <>
      <Modal show={props.showModal} onHide={props.handleModalClose}>
        {props.title &&
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
        }
        <Modal.Body>{props.children}</Modal.Body>
        {props.confirmation &&
          <Modal.Footer>
            <Button variant='primary' onClick={props.handleModalClose}>
              Continue
            </Button>
            <Button variant='secondary' onClick={props.handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        }
      </Modal>
    </>
  );
};

export default MyModal;
