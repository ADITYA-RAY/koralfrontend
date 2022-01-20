import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscTriangleDown } from "react-icons/vsc";

export const Contact = () => {
  const showOptions = () => {
    document.getElementById("dropdown").style.display = "block";
  };
  return (
    <div>
      <br />
      <br />
      <h2 className="center">Request a quote today!</h2>
      <div className="contact_card">
        <Container>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <div className="label">Your Name(Required)</div>
              <input type="text" />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Your Email(Required)</div>
              <input type="text" />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Subject</div>
              <input type="text" />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Service Desired</div>
              <div
                className="select"
                onClick={() => {
                  showOptions();
                }}
                id="select"
              >
                <VscTriangleDown />
              </div>
              <div className="dropdown" id="dropdown">
                <div className="droplink">Web Design</div>
                <div className="droplink">Branding</div>
                <div className="droplink">Web APS</div>
                <div className="droplink">Graphic</div>
                <div className="droplink">Support</div>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="label">Subject</div>
              <textarea name="message"></textarea>
            </Col>
          </Row>
          <br />
          <center>
            <button className="c_btn">SEND QUOTE</button>
          </center>
          <br />
        </Container>
      </div>
    </div>
  );
};
