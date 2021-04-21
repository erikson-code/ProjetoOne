import NavBar from '../../../components/navbar'
import axios from 'axios'
import Link from 'next/link';


const ResourceDetail = ({ resource }) => {

    const activedResource = () => {
        axios.patch("/api/resources",{...resource,status:"active"})
        .then(_=>alert("Resource has been active"))
        .catch(_=>alert("Cannot ative the resource"))

    }

    return (
        <>
            <NavBar></NavBar>

            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        <section className="section">


                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                    <div className="content is-medium">
                                        <h2 className="subtitle is-4">{resource.createdAt}</h2>
                                        <h1 className="title">{resource.title}</h1>
                                        <p>{resource.description}</p>
                                        <p>Time to Finish: {resource.timeToFinish} min</p>
                                        <Link href={`/resources/${resource.id}/edit`}>
                                            <a className="button is-warning mr-2">
                                                Update
                                                </a>
                                        </Link>
                                        <button
                                            className="button is-success"
                                            onClick={activedResource}>
                                            Actived
                                        </button>
                                    </div>
                                </div>
                            </div>



                        </section>

                        <div className="is-divider"></div>



                    </div>
                </div>
            </section>

        </>


    )
}


export async function getServerSideProps({ params }) {

    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json()

    return {
        props: {
            resource: data
        }

    }
}

export default ResourceDetail