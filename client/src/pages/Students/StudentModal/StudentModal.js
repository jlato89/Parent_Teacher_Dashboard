import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StudentModal = (props) => {
  return (
    <Container>
      {props.student.profileImage &&
        <Row>
        <Col><center>{props.student.profileImage}</center></Col>
        </Row>
      }
      <Row>
        <Col>Age</Col><Col>{props.student.birthdate}</Col>
      </Row>
      <Row>
        <Col>Allergies</Col><Col>{props.student.allergies}</Col>
      </Row>
      <Row>
        <Col>Medical</Col><Col>{props.student.medical}</Col>
      </Row>

      <Row>
        <Col style={{ fontWeight: 'bold', textAlign: 'center' }}>Parents Contact Info</Col>
      </Row>
      <Row>
        <Col>Name</Col>
        <Col>{props.parent.firstName}
          {props.parent.firstName2 && <> & {props.parent.firstName2} </>}
        </Col>
      </Row>
      <Row>
        <Col>Phone</Col><Col>{props.parent.phone}</Col>
      </Row>
      <Row>
        <Col style={{ fontWeight: 'bold', textAlign: 'center' }}>Emergency Info</Col>
      </Row>
      {props.parent.emergencyName ?
        <>
          <Row>
            <Col >Name</Col>
            <Col>{props.parent.emergencyName}</Col>
          </Row>
          <Row>
            <Col>Phone</Col>
            <Col>{props.parent.emergencyPhone}</Col>
          </Row>
          <Row>
            <Col>Relationship</Col>
            <Col>{props.parent.relation}</Col>
          </Row>
        </>
      :
        <center>No Emergency Contacts</center>
      }
    </Container>
  )
}

export default StudentModal
