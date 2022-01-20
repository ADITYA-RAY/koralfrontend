import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import macbook from "../assets/images/apple_macbook-21.png";
import iphone from "../assets/images/apple_iphone-1.png";
import { AiOutlinePlayCircle } from "react-icons/ai";

export const Hero = () => {
  return (
    <div className="hero">
      <Row>
        <Col xs={12} md={8}>
          <img src={macbook} alt="macbook" className="macbook" />
          <img src={iphone} alt="iphone" className="iphone" />
        </Col>
        <Col xs={12} md={4}>
          <div className="herohead">Design for all devices</div>
          <p className="herodesc">
            Koral is a true website tool. Build amazing websites in minutes with
            animation tool with a clear, visual interface.
          </p>
          <button className="herobtn">
            <AiOutlinePlayCircle /> Get Started!
          </button>
        </Col>
      </Row>
    </div>
  );
};
