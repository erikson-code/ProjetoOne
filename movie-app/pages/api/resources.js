import axios from 'axios'


export default async function (req, res) {

    if (req.method === "GET") {
        const dataRes = await fetch("http://localhost:3001/api/resources")
        const data = await dataRes.json()

        res.send(data)
    } else if (req.method === "POST" || req.method==="PATCH") {


         console.log(req.body)
         const { id, title, description, link,status, timeToFinish, priority } = req.body

         if (!title || !description || !link || !timeToFinish ||!status|| !priority) {
             return res.status(422).send("Data are missing")
         }

         const url = req.method === "POST"
         ? "http://localhost:3001/api/resources"
         : `http://localhost:3001/api/resources/${id}`
        

        try{
           const axiosRes = await axios[req.method.toLowerCase()](url,req.body)
            
            return res.send((await axiosRes).data)
        }catch{
            return status(422).send("Data cannot be stored")
        }
        

       
    }

}




