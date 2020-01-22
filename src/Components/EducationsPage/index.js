import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const rowStyle1 = {
  marginBottom: 45
}

const colStyle1 = {
  fontSize: 44,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}
const colStyle2 = {
  fontSize: 20,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}

const EducationsPage = () => {
  return (
    <Jumbotron style={{
        backgroundColor: "black",
        borderRadius: 0,
        height: 700
      }}
    >
      <Container>
        <Row style={rowStyle1}>
          <Col style={colStyle1}>Education</Col>
        </Row>
        <Row style={rowStyle1}>
          <Col style={colStyle2}>2010.3~2018.9 : 한양대학교 중어중문학과 (4학년 중퇴)</Col>
        </Row>
        <Row>
          <Col style={colStyle2}>2020.3~ : 방송통신대학교 컴퓨터과학과 3학년 입학 예정(편입학)</Col>
        </Row>

      </Container>
    </Jumbotron>
  )
}

export default EducationsPage;
