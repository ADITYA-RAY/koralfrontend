import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscTriangleDown } from "react-icons/vsc";
import axios from "axios";

export const Contact = () => {
  const [selected, setSelected] = useState("web design");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.getElementById("selected").innerHTML = selected;
  });

  const showOptions = (value) => {
    setSelected(value);
    document.getElementById("selected").innerHTML = selected;
  };
  const handleSubmit = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      if (name !== "") {
        const payload = {
          name: name,
          email: email,
          subject: subject,
          service: selected,
          message: message,
        };

        axios
          .post("https://koralbackend.herokuapp.com/api/quotation/", payload)
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              alert("Quote Sent Sucessfully!");
            }
          })
          .catch((error) => {
            alert(error);
            console.log(error);
          });

        console.log(payload);
      } else {
        alert("enter your name");
      }
    } else {
      alert("enter a valid email");
    }
  };
  return (
    <div className="contact_wrap">
      <br />
      <br />
      <h2 className="center">Request a quote today!</h2>
      <div className="contact_card">
        <Container>
          <br />

          <Row>
            <Col xs={12} md={6}>
              <div className="label">Your Name(Required)</div>
              <input
                type="text"
                id="f_name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Your Email(Required)</div>
              <input
                type="email"
                id="f_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Subject</div>
              <input
                type="text"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="label">Service Desired</div>
              <div className="select" id="select">
                <div id="selected"></div>
                <VscTriangleDown />
              </div>
              <div className="dropdown" id="dropdown">
                <div
                  className="droplink"
                  onClick={() => {
                    showOptions("web design");
                  }}
                >
                  Web Design
                </div>
                <div
                  className="droplink"
                  onClick={() => {
                    showOptions("branding");
                  }}
                >
                  Branding
                </div>
                <div
                  className="droplink"
                  onClick={() => {
                    showOptions("web aps");
                  }}
                >
                  Web APS
                </div>
                <div
                  className="droplink"
                  onClick={() => {
                    showOptions("graphic");
                  }}
                >
                  Graphic
                </div>
                <div
                  className="droplink"
                  onClick={() => {
                    showOptions("support");
                  }}
                >
                  Support
                </div>
              </div>
            </Col>
            <Col xs={12} md={12}>
              <div className="label">Message</div>
              <textarea
                name="message"
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </Col>
          </Row>

          <br />
          <center>
            <button
              type="submit"
              className="c_btn"
              onClick={() => {
                handleSubmit();
              }}
            >
              GET QUOTE
            </button>
          </center>
          <br />
        </Container>
      </div>
    </div>
  );
};
