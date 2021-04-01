
import NavBar from '../components/navbar.js'
import Footer from '../components/Footer'
import ResourcesList from '../components/ResourseList'
import ResourcesHigh from '../components/ResourseHighLight'
import Newsletter from '../components/Newsletter'

import data from './api/data'

export default function Home() {

  console.log(data)

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