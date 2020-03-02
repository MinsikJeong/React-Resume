import React from 'react';
import { Jumbotron, Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";
import Example from './Example'
import Example2 from './Example2'


const rowStyle1 = {
  marginBottom: 35
}

const rowStyle2 = {
  marginTop: 15,
  marginBottom: 15
}

const rowStyle3 = {
  marginTop: 35,
  marginBottom: 15
}

const colStyle1 = {
  fontSize: 44,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}
const colStyle2 = {
  fontSize: 22,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}

const SkillsPage = () => {
  return (
    <Jumbotron style={{
        backgroundColor: "black",
        borderRadius: 0,
        height: 700
      }}
    >
      <Container>
        <Row style={rowStyle1}>
          <Col style={colStyle1}>Skills</Col>
        </Row>
        <Row style={rowStyle2}>
          <Col style={colStyle2}>Language</Col>
        </Row>
        <Row style={rowStyle2}>
          <Col style={colStyle2}><Example /></Col>
        </Row>

        <Row style={rowStyle3}>
          <Col style={colStyle2}>Framework or Library</Col>
        </Row>
        <Row style={rowStyle2}>
          <Col style={colStyle2}><Example2 /></Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default SkillsPage;
