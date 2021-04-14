import NavBar from '../../components/navbar.js'
import { useRouter } from 'next/router'


const ResourceDetail = ({ resource }) => {
    // const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading Data!</div>
    // }
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

export async function getStaticPaths() {
    const resData = await fetch("http://localhost:3001/api/resources")
    const data = await resData.json();

    const paths = data.map(resource => {

        return {
            params: { id: resource.id }
        }
    })

    return {
        paths,
        //Means that other routes should resolve into 404 page
        fallback: false
    }

}

export async function getStaticProps({ params }) {

    const dataRes = await fetch(`http://localhost:3001/api/resources/${params.id}`)
    const data = await dataRes.json()

    return {
        props: {
            resource: data
        },
        revalidate: 1

    }
}

export default ResourceDetail