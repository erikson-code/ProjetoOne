import Link from 'next/link'
import ResourceLabel from '../components/ResourceLabel'
import moment from 'moment'
const ResourseHighLight = ({ resources }) => {

  return (

    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">


              {resources.map((resources) => {

                return (
                  <div key={resources.id} className="columns">
                    <div className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h2 className="subtitle is-4">{moment(resources.createdAt).format("LLL")}
                         <ResourceLabel status ={resources.status}></ResourceLabel>
                          </h2>
                        <h1 className="title">{resources.title}</h1>

                        <p className="mb-2">{resources.description}</p>
                        <Link href={`/resources/${resources.id}`}>
                          <a className="button is-light">Learn More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )


              })}


            </section>

            <div className="is-divider"></div>



          </div>
        </div>
      </section>

    </>
  )
}

export default ResourseHighLight