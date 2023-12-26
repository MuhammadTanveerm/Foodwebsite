import React from 'react'
// import Header from '../../Components/Layouts/Header'
import Layout from '../../Components/Layouts/Layout'
import Section1 from './Section1'
import '../../Pages/Home/HomeStyle.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
const Home = () => {
  return (
  <>
 <Layout>
  {/* // Home section Hero banner  */}
  
  <Section1/>
  {/* Home section about */}
  <Section2/>
  
  {/* Home Section3 Menu  */}
 
  <Section3/>

  {/*  Home Section4 Shop */ }
<Section4/>
{/* Home Section 5 shop */}
<Section5/>


{/* Home section 6  */}
<Section6/>

{/* Home contact secion */ }
<Section7/>
   </Layout>
   </>
  )
}

export default Home