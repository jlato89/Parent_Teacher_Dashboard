import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MyModal from '../../../components/MyModal/MyModal';
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
        <p>Allergies - {modalData.student.allergies}</p>
        <p>Parent Phone - {modalData.parent.phone}</p>
        <p>Medical - {modalData.student.medical}</p>
      </MyModal>
    </main>
  )
}

export default StudentCard
