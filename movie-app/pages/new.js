import NavBar from "../components/navbar"
import axios from 'axios'
import { useRouter } from 'next/router'
import ResourceForm from '../components/ResourceForm'



const ResourceCreatePage = (formData) => {


    const router = useRouter()
    const createResource = formData => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }



    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                    <ResourceForm onFormSubmit = {createResource}></ResourceForm>
                    </div>
                </div>
            </div>
        </>
    )

}


export default ResourceCreatePage