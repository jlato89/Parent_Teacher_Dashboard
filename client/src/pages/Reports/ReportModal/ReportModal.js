import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';

const ReportModal = ({ report }) => {
  return (
    <Container>
      <Row>
        <Col>Student Name:</Col><Col>{report.studentName}</Col>
      </Row>
      <Row>
        <Col>Date:</Col>
        <Col>
          <Moment date={report.date} format='MMM Do, YYYY' />
        </Col>
      </Row>
      <Row>
        <Col>I was feeling:</Col><Col>{report.attitude}</Col>
      </Row>
      <Row>
        <Col>I enjoyed:</Col><Col>{report.enjoyed}</Col>
      </Row>
      <Row>
        <Col>Bathroom Trips:</Col><Col>{report.brBreaks}</Col>
      </Row>
      <Row>
        <Col>Nap Time:</Col><Col>{report.napTime}</Col>
      </Row>
      <Row>
        <Col>I ate:</Col><Col>{report.ate}</Col>
      </Row>
      <Row>
        <Col>Supplies Needed:</Col><Col>{report.suppliesNeeded}</Col>
      </Row>
      <Row>
        <Col>Comments:</Col>
      </Row>
      <Row>
        <Col>{report.comments}</Col>
      </Row>
    </Container>
  )
}

export default ReportModal
