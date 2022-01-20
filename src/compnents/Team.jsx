import React from "react";
import { BsTwitter, BsInstagram, BsDribbble } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Team = () => {
  return (
    <div className="team_wrapper">
      <br />
      <br />
      <Row>
        <Col xs={12} md={4}>
          <div className="teamtext">
            <span className="line abc">We</span>
            <span className="line abd">Build</span>
            <span className="line abe">Strong</span>
            <span className="line abf">Brands</span>
          </div>
        </Col>

        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={6}>
              <div className="team_card t1">
                <img
                  src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/05/team1.jpg"
                  alt=""
                  className="team_img"
                />
                <div className="team_name">Tony Stark</div>
                <div className="team_designation">CEO</div>
                <div className="team_social">
                  <BsTwitter />
                  <BsInstagram />
                  <BsDribbble />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <br />
              <div className="team_card t2">
                <img
                  src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/05/team2.jpg"
                  alt=""
                  className="team_img"
                />
                <div className="team_name">Bruce Banner</div>
                <div className="team_designation">CTO</div>
                <div className="team_social">
                  <BsTwitter />
                  <BsInstagram />
                  <BsDribbble />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="team_card t3">
                <img
                  src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/05/team3.jpg"
                  alt=""
                  className="team_img"
                />
                <div className="team_name">Peter Parker</div>
                <div className="team_designation">Design</div>
                <div className="team_social">
                  <BsTwitter />
                  <BsInstagram />
                  <BsDribbble />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <br />
              <div className="team_card t4">
                <img
                  src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/05/team4.jpg"
                  alt=""
                  className="team_img"
                />
                <div className="team_name">Asguardian Thor</div>
                <div className="team_designation">Developement</div>
                <div className="team_social">
                  <BsTwitter />
                  <BsInstagram />
                  <BsDribbble />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
};
