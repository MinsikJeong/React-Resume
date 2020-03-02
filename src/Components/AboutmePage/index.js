import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const rowStyle1 = {
  marginTop: 25,
  marginBottom: 40
}

const colStyle1 = {
  fontSize: 21,
  fontWeight: "lighter",
  color: "white",
  textAlign: "center",
}
const colStyle2 = {
  fontSize: 30,
  fontWeight: "bolder",
  color: "white",
  textAlign: "center",
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
          <Col style={colStyle2}>
          안녕하세요! 사고링크에 지원한 정민식입니다.
          </Col>
        </Row>
        <Row style={rowStyle1}>
          <Col style={colStyle1}>
            비록 현업에서 개발을 해보진 않았지만,<br />
            여러가지 경로를 통해 개발을 해 왔습니다.<br />
            새로운 기술을 받아들이는 데 열정적이며<br />
            배움에는 끝이 없다고 생각합니다.<br />
            아직 부족하지만,<br />
            함께 일하고 싶은 개발자가 되는 것이 제 목표입니다.<br />
            감사합니다.
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default IntroMyself;
