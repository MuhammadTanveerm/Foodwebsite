import React, { Children } from 'react'
import Header from './Header'
 import Footer from './Footer'
// import Home from '../../Pages/Home/Home';

const Layout = ( {children} ) => {
  return (
    <>
    <Header/>
   <div> {children} </div>
     <Footer/> 
    </>
  );
}
export default Layout