import NavBar from "../../../components/navbar"
import axios from 'axios'
import { useRouter } from 'next/router'
import ResourceForm from '../../../components/ResourceForm'


const ResourceEdit = ({ resource }) => {

    const router = useRouter()

    const createResource = formData => {
        axios.post("/api/resources", formData)
            .then(_ => router.push("/"))
            .catch(err => alert(err?.response?.data));
    }

    const updateResource = (formData) => {
       axios.patch("/api/resources",formData)
       .then(_ => router.push("/"))
       .catch(err=>alert(err?.response?.data))
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm initialData = {resource} onFormSubmit = {updateResource}></ResourceForm>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps({ params }) {

    const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`)
    const data = await dataRes.json()

    return {
        props: {
            resource: data
        }

    }
}

export default ResourceEdit