import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReportModal = (props) => {
  return (
    <Container>
      <Row>
        <Col>Student Name</Col><Col>{props.report.studentName}</Col>
      </Row>
      <Row>
        <Col>Date</Col><Col>{props.report.date}</Col>
      </Row>
      <Row>
        <Col>I was feeling</Col><Col>{props.report.attitude}</Col>
      </Row>
      <Row>
        <Col>I enjoyed</Col><Col>{props.report.enjoyed}</Col>
      </Row>
      <Row>
        <Col>Bathroom Trips</Col><Col>{props.report.brBreaks}</Col>
      </Row>
      <Row>
        <Col>Nap Time</Col><Col>{props.report.napTime}</Col>
      </Row>
      <Row>
        <Col>I ate</Col><Col>{props.report.ate}</Col>
      </Row>
      <Row>
        <Col>Supplies Needed</Col><Col>{props.report.suppliesNeeded}</Col>
      </Row>
      <Row>
        <Col>Comments</Col>
      </Row>
      <Row>
        <Col>{props.report.comments}</Col>
      </Row>
    </Container>
  )
}

export default ReportModal
