
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

  const resData = await fetch(`${process.env.API_URL}/resources`)
  const data = await resData.json();

  return {
    props:{
        Resources: data
    }
  }

}