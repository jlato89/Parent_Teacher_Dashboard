import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = props => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
