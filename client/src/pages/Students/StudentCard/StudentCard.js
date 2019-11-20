import React from 'react';
import Card from 'react-bootstrap/Card';
import ProfilePlaceholder from '../../../assets/images/profile-placeholder.png';

// import styles from './StudentCard.module.css';

const StudentCard = (props) => {
  const parentInfoHandler = (parentId) => {
    let obj=  props.parentArr.find(p => p.id === parentId)
    return obj
  }
  return (
    <main>
      {props.studentArr.map(student => (
        <Card className='d-flex flex-row' key={student.id}>
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
    </main>
  )
}

export default StudentCard
