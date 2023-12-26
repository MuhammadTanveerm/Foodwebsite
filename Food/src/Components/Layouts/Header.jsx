import React, { useState } from 'react';
import '../../Styles/Header.css'
import {Nav,Container,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';
import logo from '../../Food_Assets/assets/logo/logo.png';

const Header = () => {

  const [nav, setNav] =useState(false)

  const changeValueOnScroll=()=>{
    const scrollValue= document?.documentElement?.scrollTop;
    scrollValue> 100 ? setNav(true) : setNav(false);

  };

  window.addEventListener("scroll", changeValueOnScroll);
  return (
   
    <header>
    <Navbar expand="lg" 
    className={`${ nav === true ?  "sticky" : "" }`} 
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="logo">
          <img  src={logo} alt='logo' className='img-fluid'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
               <Nav.Link as={Link} to="/menu">Our  Menu</Nav.Link> 
                 <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
                 <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                 <Nav.Link as={Link} to="/Contat">Contact</Nav.Link>
                 <Nav.Link as={Link} to="/">
                  <div className="cart">
                  {/* <i className="bi bi-bag fs-5"></i> */}
                  <MdShoppingCart className='me-1'/>
                  <em className='roundpoint'>2</em>
                 </div>
                 </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  

  )
}

export default Header