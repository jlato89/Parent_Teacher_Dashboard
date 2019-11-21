import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MyModal from '../../../components/MyModal/MyModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePlaceholder from '../../../assets/images/profile-placeholder.png';


// import styles from './StudentCard.module.css';

const StudentCard = (props) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({ student: '', parent: '' });

  const handleClose = () => setShow(false);
  const handleShow = (student) => {
    setShow(true);
    setModalData({
      student: student,
      parent: parentInfoHandler(student.parentId)
    })
  }

  const parentInfoHandler = (parentId) => {
    let obj = props.parentArr.find(p => p.id === parentId)
    return obj
  }
  return (
    <main>
      {props.studentArr.map(student => (
        <Card
          className='d-flex flex-row'
          key={student.id}
          onClick={() => handleShow(student)}
        >
          <Card.Img variant="top" style={{ width: '35%' }} src={
            student.profileImage
              ? student.profileImage
              : ProfilePlaceholder
          } />
          <Card.Body>
            <Card.Title>
              {student.firstName} {student.lastName}
            </Card.Title>
            <Card.Subtitle>
              {parentInfoHandler(student.parentId).phone}
            </Card.Subtitle>
            <Card.Text>
              (Additional Info will go here)
            </Card.Text>
            <Card.Link href='#'>More Info</Card.Link>
          </Card.Body>
        </Card>
      ))}
      <MyModal 
        title={modalData.student.firstName + ' ' + modalData.student.lastName} 
        showModal={show} 
        handleModalClose={handleClose}
      >
        <Container>
          {modalData.student.profileImage &&
          <Row>
            <Col>Age</Col><Col>{modalData.student.profileImage}</Col>
          </Row> }
          <Row>
            <Col>Age</Col><Col>{modalData.student.birthdate}</Col>
          </Row>
          <Row>
            <Col>Allergies</Col><Col>{modalData.student.allergies}</Col>
          </Row>
          <Row>
            <Col>Medical</Col><Col>{modalData.student.medical}</Col>
          </Row>

          <Row>
            <Col style={{fontWeight: 'bold', textAlign: 'center'}}>Parents Contact Info</Col>
          </Row>
          <Row>
            <Col>Name</Col>
            <Col>{modalData.parent.firstName} & {modalData.parent.firstName2}</Col>
          </Row>
          <Row>
            <Col>Phone</Col><Col>{modalData.parent.phone}</Col>
          </Row>
          <Row>
            <Col>Emergency Contact</Col>
          <Col>{modalData.parent.emergencyName} | {modalData.parent.emergencyPhone}</Col>
          </Row>
        </Container>
      </MyModal>
    </main>
  )
}

export default StudentCard
