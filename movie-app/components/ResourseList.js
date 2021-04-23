import Link from 'next/link'
import ResourceLabel from '../components/ResourceLabel'
import moment from 'moment'
const ResourseList = ({ resources }) => {

    return (

        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">

                        {resources.map((resources) => {
                            return (
                                <div key={resources.id}>
                                    <div className="content is-medium">


                                        <h2 className="subtitle is-5 has-text-grey">{moment(resources.createdAt).format("LLL")}</h2>
                                        <h1 className="title has-text-black is-3">{resources.title}
                                            <ResourceLabel status={resources.status}></ResourceLabel>
                                        </h1>
                                        <p className="has-text-dark">{resources.description}</p>
                                        <Link href={`/resources/${resources.id}`}>
                                            <a className="button is-light">Learn More</a>
                                        </Link>
                                    </div>

                                    <div className="is-divider"></div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>



        </>
    )
}



export default ResourseList