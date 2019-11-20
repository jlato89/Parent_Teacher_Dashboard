import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfilePlaceholder from '../../../assets/images/profile-placeholder.png';


const StudentCard = (props) => {
  // parentInfoHandler = (parentId) => {
  //   props.parentArr.find(parent => id===3)
  // }
  return (
    // <main style={{ display: 'flex', flexWrap: 'wrap' }}>
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
              {props.parentArr[2].phone}
            </Card.Subtitle>
            <Card.Text>
              Place some info here.
            </Card.Text>
            <Card.Link href='#'>More Info</Card.Link>
            {/* <Button variant="primary">Info</Button> */}
          </Card.Body>
        </Card>
      ))}
    </main>
  )
}

export default StudentCard
