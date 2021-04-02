const ResourseList = ({ resources }) => {

    return (

        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">

                        {resources.map((resources) => {
                            return (
                                <div key = {resources.id}>
                                    <div className="content is-medium">


                                        <h2 className="subtitle is-5 has-text-grey">{resources.createdAt}</h2>
                                        <h1 className="title has-text-black is-3">{resources.title}</h1>
                                        <p className="has-text-dark">{resources.description}</p>
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