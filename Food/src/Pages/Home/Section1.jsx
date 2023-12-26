import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../Food_Assets/assets/hero/hero-2.png";
import { Link } from "react-router-dom";
import './HomeStyle.css'
const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} alt="hero" className="img-fluid" />
              <div className="badge_price">
                <div className="badge_text">
                  <h4 className="h4_xs"> Only </h4>
                  <h4 className="h4_lg"> $6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit vero quia atque harum, est perferendis quod sint
                iusto excepturi impedit?
              </p>
              <Link to="/" className="btn order_now ">
                {" "}
                Order Now{" "}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
