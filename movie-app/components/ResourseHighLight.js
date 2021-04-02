const ResourseHighLight = ({ resources }) => {

  return (

    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">

                {resources.map((resources) => {

                  return (
                    <div key ={resources.id}  className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h2 className="subtitle is-4">{resources.createdAt}</h2>
                        <h1 className="title">{resources.title}</h1>
                        <p>{resources.description}</p>
                      </div>
                    </div>
                  )


                })}

              </div>
            </section>

            <div className="is-divider"></div>



          </div>
        </div>
      </section>

    </>
  )
}

export default ResourseHighLight