
import NavBar from '../components/navbar.js'
import Footer from '../components/Footer'
import ResourcesList from '../components/ResourseList'
import ResourcesHigh from '../components/ResourseHighLight'
import Newsletter from '../components/Newsletter'


export default function Home({Resources}) {

  
  return (
    <div>
      <NavBar ></NavBar>
      <ResourcesHigh resources = {Resources.slice(4)}></ResourcesHigh>
      <Newsletter></Newsletter>
      <ResourcesList resources = {Resources.slice(0,4)}></ResourcesList>

      <Footer></Footer>




    </div>

  )
}

export async function getServerSideProps(){

  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json();

  console.log(data)
  return {
    props:{
        Resources: data
    }
  }

}