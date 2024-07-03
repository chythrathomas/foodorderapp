import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

function ContactUs() {
  return (
    <Container
      style={{
        paddingTop: "100px",

        height: "100vh",
        maxHeight: "100%",
      }}
    >
      <Row>
        <Col md={6}>
          <Card
            className="shadow-lg mb-5"
            // style={{ backgroundColor: "rgb(22, 20, 20)" }}
          >
            <h2 style={{padding:"10px 0px"}}>Contact information</h2>
            <Row>
              <Col xs={4}>
                <h6 style={{ textAlign: "right" }}>Address: </h6>{" "}
              </Col>
              <Col xs={8} className="text-left">
                {" "}
                <h6 style={{fontStyle:"italic"}}>Street 15, Balagrae junction, thopramkudi-15</h6>
              </Col>
              <Col></Col>
            </Row>

            <Row>
              <Col xs={4}>
                <h6 style={{ textAlign: "right" }}>Customer Care: </h6>
              </Col>
              <Col xs={6} className="text-left">
                <a
                  style={{
                    color: "black",
                    fontStyle: "italic",
                    textDecoration: "none",
                    
                  }}
                  href="tel: +91 00000000"
                >
                  7876535736
                </a>
              </Col>
              </Row>
              <Row>
                <Col xs={4}></Col>
              <Col xs={8}>
                {" "}
                <a
                  href="https://wa.me/9145345637743"
                  className="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "40px", height: "40px" }}
                >
                  <span>
                    {" "}
                    Whatsapp us
                    <i
                      className="fa fa-whatsapp whatsapp-icon"
                      style={{ padding: "5px" }}
                    ></i>
                  </span>
                </a>
              </Col>
            </Row>

            <Row>
              <Col xs={4}>
                <h6 style={{ textAlign: "right" }}>Email: </h6>
              </Col>
              <Col xs={8} className="text-left">
                <a
                  style={{
                    color: "black",
                    fontStyle: "italic",
                    textDecoration: "none",
                  }}
                  href="tel: +91 00000000"
                >
                  contact@eeatfresh.com
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            className="shadow-lg"
            // style={{ backgroundColor: "rgb(22, 20, 20)" }}
          >
            <Form className="mb-3">
              <Form.Group className="mb-3">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control
                      placeholder="Your name"
                      style={{
                        // backgroundColor: "rgb(22, 20, 20)",
                        border: "transparent",
                        borderBottom: "1px solid gray",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      placeholder="Contact number"
                      style={{
                        // backgroundColor: "rgb(22, 20, 20)",
                        border: "transparent",
                        borderBottom: "1px solid gray",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="your email address"
                      style={{
                        // backgroundColor: "rgb(22, 20, 20)",
                        border: "transparent",
                        borderBottom: "1px solid gray",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Message"
                      style={{
                        // backgroundColor: "rgb(22, 20, 20)",
                        border: "transparent",
                        borderBottom: "1px solid gray",
                      }}
                    />
                  </InputGroup>
                </Row>
              </Form.Group>
              <Form.Group style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  style={{
                    textAlign: "center",
                    border: "transparent",
                    backgroundColor: "greenyellow",
                    color: "black",
                  }}
                >
                  Send message
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col
          md={10}
          className="mx-auto my-4"
          style={{  height: "200px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15553.993177987539!2d77.73376215!3d12.9399348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670477644883!5m2!1sen!2sin"
           
            style={{border:"0", opacity:".8",width:"100%", height:"100%",border:"none"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row> */}
    </Container>
  );
}

export default ContactUs;