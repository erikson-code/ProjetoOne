import NavBar from '../../components/navbar.js'

const ResourceDetail = ({resourceId}) => {
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
                                        <h2 className="subtitle is-4">{resourceId}</h2>
                                        <h1 className="title">Title Here</h1>
                                        <p>Desc here</p>
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

export function getServerSideProps({params}){
    return{
        props:{
            resourceId: params.id
        }

    }
}

export default ResourceDetail