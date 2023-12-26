
import React from 'react'
import {Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Pages/Home/HomeStyle.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
const Cards = ({image, title,paragraph,price,rating, renderRatingIcons}) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
     <Card  className="overflow-hidden">
  <div className="overflow-hidden">
    <Card.Img  variant="top" src={image} />
  </div>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="items_rating"> {renderRatingIcons(rating)}</div>
          <div className="wishlist">
          {/* <i class="bi bi-heart"> </i> */}
          {/* {AiOutlineHeart} */}
          <FaHeart className='ic' />
          </div>
           </div>
        <Card.Title className='card-title'>
        {title}
        </Card.Title>
        <Card.Text className='card-text'> {paragraph}</Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <div className='menu-price'> 
          <h5 classsName="mb-0">${price}</h5>
          </div>
          <div className='add_to_cart'>
            <Link to='/'>
            < FaCartPlus className='ad' />
          Add  To Cart
          </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
    </Col>
  
  )
}

export default Cards