import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Progress } from "./Progress";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
export const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Bounce>
            <Col xs={12} md={6}>
              <div className="heading">We are consultants and</div>
              <div className="heading">we develop Digital Strategies</div>
              <br />
            </Col>
          </Bounce>
        </Row>
        <br />
        <Row>
          <Bounce>
            <Col xs={12} md={6}>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis commodo consequat.
              <br />
            </Col>
          </Bounce>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={4}>
            <Fade bottom big>
              <div className="number one">.01</div>
              <div className="a_head">Innovative</div>
              <div className="a_content">
                Interactively brand robust collaboration and idea-sharing rather
                than dynamic e-tailers
              </div>
              <br />
            </Fade>
          </Col>

          <Col xs={12} md={4}>
            <Fade bottom big>
              <div className="number two">.02</div>
              <div className="a_head">Intutive</div>
              <div className="a_content">
                Interactively brand robust collaboration and idea-sharing rather
                than dynamic e-tailers
              </div>
              <br />
            </Fade>
          </Col>
          <Col xs={12} md={4}>
            <Fade bottom big>
              <div className="number three">.03</div>
              <div className="a_head">Modern</div>
              <div className="a_content">
                Interactively brand robust collaboration and idea-sharing rather
                than dynamic e-tailers
              </div>
              <br />
            </Fade>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
      <div className="skills">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h3>
                <b>
                  <span className="s_purple">CODE</span> SKILLS
                </b>
              </h3>
              <br />
              <Fade bottom big>
                <Progress
                  text="developement"
                  value="95%"
                  color="rgb(100, 104, 223)"
                />
              </Fade>
              <Fade bottom big>
                <Progress
                  text="design"
                  value="85%"
                  color="rgb(100, 104, 223)"
                />
              </Fade>
              <Fade bottom big>
                <Progress text="print" value="80%" color="rgb(100, 104, 223)" />
              </Fade>
              <Fade bottom big>
                <Progress
                  text="marketing"
                  value="75%"
                  color="rgb(100, 104, 223)"
                />
              </Fade>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={12} md={6}>
              <h3>
                <b>
                  <span className="s_lightpink">DESIGN</span> SKILLS
                </b>
              </h3>
              <br />
              <Fade bottom big>
                <Progress
                  text="developement"
                  value="95%"
                  color="rgb(250, 114, 104)"
                />
              </Fade>
              <Fade bottom big>
                <Progress
                  text="design"
                  value="85%"
                  color="rgb(250, 114, 104)"
                />
              </Fade>
              <Fade bottom big>
                <Progress text="print" value="80%" color="rgb(250, 114, 104)" />
              </Fade>
              <Fade bottom big>
                <Progress
                  text="marketing"
                  value="75%"
                  color="rgb(250, 114, 104)"
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
