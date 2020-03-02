import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const rowStyle1 = {
  marginBottom: 30
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
const buttonStyle = {
  borderTopRightRadius: '33px',
  borderBottomRightRadius: '33px',
  borderTopLeftRadius: '33px',
  borderBottomLeftRadius: '33px'
}

const PortfolioPage = () => {
  return (
    <Jumbotron style={{
        backgroundColor: "black",
        borderRadius: 0,
        height: 700
      }}
    >
      <Container>
        <Row style={rowStyle1}>
          <Col style={colStyle1}>Portfolios</Col>
        </Row>
        <Row style={rowStyle1}>
          <Col style={colStyle2}>라고 하기 부끄러운 Practices</Col>
        </Row>
        <Row style={rowStyle1}>
          <Col style={colStyle2}>클릭하시면 이동합니다</Col>
        </Row>
        <Row>
          <Col style={colStyle2}>
            <PortfolioCarousel />
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );
}

export default PortfolioPage;
