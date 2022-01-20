import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Services = () => {
  const elements = [
    "https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/07/pink1.jpg",
    "https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/07/pink2.jpg",
    "https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/05/project04.jpg",
    "https://demos.upperthemes.com/koral/site1/wp-content/uploads/sites/9/2019/07/spectrum2.jpg",
    "https://demos.upperthemes.com/koral/site1/wp-content/uploads/sites/9/2019/07/mug2.jpg",
    "https://demos.upperthemes.com/koral/site1/wp-content/uploads/sites/9/2019/07/spectrum4.jpg",
  ];

  const items = [];
  for (const [index, value] of elements.entries()) {
    items.push(
      <Col xs={12} md={4} style={{ paddingLeft: "0", paddingRight: "0" }}>
        <div className="appear">
          <img src={value} alt="image" className="gridimage" />
          <div className="appear_text">Photography</div>
        </div>
      </Col>
    );
  }
  return (
    <div>
      <div className="wedo">We Do Web Developement</div>
      <Row>{items}</Row>
      <div className="c_strip">
        <h2>
          <b>Lets Work Together!</b>
        </h2>
        <h5>Koral is the perfect theme for you that you will love!</h5>
        <button className="c_btn">CONTACT US TODAY!</button>
      </div>
    </div>
  );
};
