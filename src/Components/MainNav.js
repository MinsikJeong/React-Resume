import React from "react";
import { Nav, Button } from "react-bootstrap";

const MainNav = () => {

  const itemStyle = {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bolder'
  }

  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
      }}
    >

      <Nav.Item as="li">
        <Nav.Link href="/" style={itemStyle}>Main</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link href="/aboutme" style={itemStyle}>Aboutme</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link href="/skills" style={itemStyle}>Skills</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link href="/portfolio" style={itemStyle}>Portfolios</Nav.Link>
      </Nav.Item>

    </Nav>
  )
};

export default MainNav;
