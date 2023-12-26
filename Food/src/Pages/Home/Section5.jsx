import React from 'react'
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ios from '../../Food_Assets/assets/shop/appstore.png'
import and from '../../Food_Assets/assets/shop/googleplay.png'
import download from '../../Food_Assets/assets/shop/e-shop.png'
import Brand1 from '../../Food_Assets/assets/brands/brand-11.png'
import Brand2 from '../../Food_Assets/assets/brands/brand-12.png'
import Brand3 from '../../Food_Assets/assets/brands/brand-13.png'
import Brand4 from '../../Food_Assets/assets/brands/brand-14.png'
import Brand5 from '../../Food_Assets/assets/brands/brand-15.png'
import Brand6 from '../../Food_Assets/assets/brands/brand-16.png'
import Brand7 from '../../Food_Assets/assets/brands/brand-17.png'
import Brand8 from '../../Food_Assets/assets/brands/brand-18.png'
const Section5 = () => {
  return (
    <>
    <section className="shop_section">
        <Container>
            <Row className=" align-items-center">
                <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                    <h4>Download mobile App and</h4>
            <h2>save up to 20% </h2>
            <p>
 Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius</p>
            <Link to="/" >
                 <img src={ios} alt="IOS" className="img-fluid store me-3"></img>
            </Link>

            <Link to="/" >
                <img src={and} alt="Aderiod" className="img-fluid store me-3"></img>
            </Link>
                </Col>
                <Col lg={6}>
              <Link to='/'>
                <img src={download} alt="eshop" className="img-fluid e_shop me-3"></img>
              </Link>
                </Col>
            </Row>
        </Container>
        </section>
{/* <section className='brand_section'>
    <Container>
        <Row>
     <Carousel>
      <Carousel.Item>
       
        <Carousel.Caption>
      <div ClassName="d-flex justify-content-between align-items-center">
        <div className="brand_img">
            <img src={brand1} alt="brand-1" className="img-fluid"></img>
        </div>
        <div className="brand_img">
            <img src={brand2} alt="brand-2" className="img-fluid"></img>
        </div>
        <div className="brand_img">
            <img src={brand3} alt="brand-3" className="img-fluid"></img>
        </div>

        <div className="brand_img">
            <img src={brand4} alt="brand-4" className="img-fluid"></img>
        </div>

        <div className="brand_img">
            <img src={brand5} alt="brand1-5"></img>
            </div>
        <div className="brand_img">
            <img src={brand6} alt="brand-6" className="img-fluid"></img>
        </div>
       </div>
    
        </Carousel.Caption>

      </Carousel.Item>
        <Carousel.Item>
       
        <Carousel.Caption>
      <div ClassName="d-flex  align-items-center justify-content-between">
        <div className="brand_img">
            <img src={brand3} alt="brand-3" className="img-fluid"></img>
        </div>
        <div className="brand_img">
            <img src={brand4} alt="brand-4" className="img-fluid"></img>
        </div>
        <div className="brand_img">
            <img src={brand5} alt="brand-5" className="img-fluid"></img>
        </div>

        <div className="brand_img">
            <img src={brand6} alt="brand-6" className="img-fluid"></img>
        </div>

        <div className="brand_img">
            <img src={brand7} alt="brand1-7"></img>
            </div>
        <div className="brand_img">
            <img src={brand8} alt="brand-8" className="img-fluid"></img>
        </div>
       </div>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
    </Container>
</section> */}
       <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} className="img-fluid" alt="brand-1" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand2} className="img-fluid" alt="brand-2" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand7} className="img-fluid" alt="brand-7" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand8} className="img-fluid" alt="brand-8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section5