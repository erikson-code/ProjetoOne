
import NavBar from '../components/navbar.js'
import Footer from '../components/Footer'
import ResourcesList from '../components/ResourseList'
import ResourcesHigh from '../components/ResourseHighLight'
import Newsletter from '../components/Newsletter'

import data from '../pages/api/data.json'

export default function Home() {

  
  return (
    <div>
      <NavBar ></NavBar>
      <ResourcesHigh resources = {data.slice(4)}></ResourcesHigh>
      <Newsletter></Newsletter>
      <ResourcesList resources = {data.slice(0,4)}></ResourcesList>

      <Footer></Footer>




    </div>

  )
}