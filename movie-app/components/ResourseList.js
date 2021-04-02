const ResourseList = ({ resources }) => {

    return (

        <>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">



                        {resources.map(() => {
                            return (
                                <>

                                    
                                        <div className="content is-medium">


                                            <h2 className="subtitle is-5 has-text-grey">December 23, 2018</h2>
                                            <h1 className="title has-text-black is-3">Custom 404 Pages</h1>
                                            <p className="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                                            /source/404.blade.php.
To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                                        </div>

                                    <div className="is-divider"></div>

                                </>
                            )
                        })}


                    </div>
                </div>
            </section>



        </>
    )
}



export default ResourseList