import Link from "next/link"
import { useEffect, useState } from "react"
import axios from 'axios'
import moment from 'moment'
const ActiveResources = () => {
    const [resource, setResource] = useState({})
    const [seconds, setSeconds] = useState()

    useEffect(() => {

        async function fetchResource() {

            const axiosRes = await axios.get("/api/activeresource")
            const resource = axiosRes.data
            const timeToFinish = parseInt(resource.timeToFinish, 10)

            const elapsedTime = moment().diff(moment(resource.activationTime), "seconds")
            const updatedTimeFinish = (timeToFinish * 60) - elapsedTime

            if (updatedTimeFinish >= 0) {
                resource.timeToFinish = updatedTimeFinish
                setSeconds(updatedTimeFinish)

            }
            setResource(resource)
        }

        fetchResource()

    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds - 1)
        }, 1000)

        if (seconds < 0) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [seconds])

    const hasResource = resource && resource.id



    return (
        <div className="active-resource">
            <h1 className="resource-name">

                {
                    hasResource ? resource.title : "No resource Active"
                }</h1>

            <div className="time-wrapper">
                {
                    hasResource &&
                    (
                        seconds > 0 ?
                            <h2 className="elapsed-time">
                                {seconds}
                            </h2> :
                            <h2 className="elapsed-time">
                                <button className="button is-success">
                                    Click and done!
                                </button>
                            </h2>
                    )
                }


            </div>
            {
                hasResource ? <Link href="/">
                    <a className="button">
                        Go to resource
                </a>
                </Link>
                    :
                    <Link href="/">
                        <a className="button">
                            Go to resources
            </a>
                    </Link>
            }


        </div>

    )


}

export default ActiveResources
