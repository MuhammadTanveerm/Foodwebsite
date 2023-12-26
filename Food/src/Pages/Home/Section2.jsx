import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import md from "./MockData";
import pizza from '../../Food_Assets/assets/about/pizza.png';
import salad from '../../Food_Assets/assets/about/salad.png';
import delivry from '../../Food_Assets/assets/about/delivery-bike.png';
const Section2 = () => {
    
 const mockData =[
    
    {
        image:pizza,
        titile:"Original",
        paragraph:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio?nadipisicing elit. Quo Lorem ipsum dolor sit,`,
    },
    {
        image:salad,
        titile:"Qualitym Food",
        paragraph:` Lorem ipsum dolor sit amet consectetur  amet consectetur adipisicing elit. Eos, sint?, odio?`,
    },
    {
        image: delivry,
        titile:"Fatest Develiry",
        paragraph:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio?`, 
    },
]
  return (
    <>
    
      <Container className="about_section">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>The Burger Tastes batte when you eat with Family</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, assumenda dolor ad ipsa aliquam sit obcaecati neque
              sunt. Adipisci in culpa tenetur sed iste quia id sit eius atque
              alias?
            </p>
            <Link to="/" className="order_now btn btn_red">
              {" "}
              Explor Full Menu
            </Link>
          </Col>
        </Row>
      </Container>

      <section className="about_wrapper">
        <Container>
            
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => ( 
              <Col md={6} lg={4} className="mb-0 mb-lg-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={cardData.image} alt="icon" className="img-fluid" />
                  </div>
                  <h4>{cardData.titile}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
