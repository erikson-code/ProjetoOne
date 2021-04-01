import Head from 'next/head'

import NavBar from '../components/navbar.js'
import Footer from '../components/Footer'
import ResourcesList from '../components/ResourseList'
import ResourcesHigh from '../components/ResourseHighLight'
import Newsletter from '../components/Newsletter'

export default function Home() {
  

  return (
    <div>
      <NavBar></NavBar>
      <ResourcesHigh></ResourcesHigh>
      <Newsletter></Newsletter>
      <ResourcesList></ResourcesList>
      
      <Footer></Footer>

      

     
    </div>

  )
}