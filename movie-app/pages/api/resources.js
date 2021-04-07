import axios from 'axios'


export default async function (req, res) {

    if (req.method === "GET") {
        const dataRes = await fetch("http://localhost:3001/api/resources")
        const data = await dataRes.json()

        res.send(data)
    } else if (req.method === "POST") {

        console.log(req.body)
        const { title, description, link, timeToFinish, priority } = req.body

        if (!title || !description || !link || !timeToFinish || !priority) {
            return res.status(422).send("Data are missing")
        }

        try{
            const axiosRes = axios.post("http://localhost:3001/api/resources",req.body)
            return res.send((await axiosRes).data)
        }catch{
            return status(422).send("Data cannot be stored")
        }
        

       
    }

}




