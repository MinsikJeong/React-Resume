import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rowStyle1 = {
  marginBottom: 30
}
const rowStyle2 = {
  marginTop: 40,
  justifyContent: 'center'
}
const colStyle1 = {
  fontSize: 44,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}
const colStyle2 = {
  fontSize: 11,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
}
const buttonStyle = {
  borderTopRightRadius: '33px',
  borderBottomRightRadius: '33px',
  borderTopLeftRadius: '33px',
  borderBottomLeftRadius: '33px'
}

const IntroMyself = () => {
  return (
    <Jumbotron style={{
        backgroundColor: "black",
        borderRadius: 0,
        height: 700
      }}
    >
      <Container>
        <Row style={rowStyle1}>
          <Col style={colStyle1}>안녕하세요!</Col>
        </Row>
        <Row>
          <Col style={colStyle2}>
            프론트엔드 개발하는 정민식입니다.
          </Col>
        </Row>
        <Row style={rowStyle2}>
          <a href="https://github.com/MinsikJeong/">
            <FontAwesomeIcon icon={faGithub} size="3x"/>
          </a>
        </Row>
        <Row style={rowStyle2}>
          <Col style={colStyle2}>
            <FontAwesomeIcon icon={faPhoneSquareAlt} />&nbsp;010-4117-3330
          </Col>
          <Col style={colStyle2}>
            <FontAwesomeIcon icon={faEnvelopeSquare} />&nbsp;minsigi0627@gmail.com
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default IntroMyself;
