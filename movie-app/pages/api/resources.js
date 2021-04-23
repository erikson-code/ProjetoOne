import axios from 'axios'


export default async function (req, res) {

    if (req.method === "GET") {
        const dataRes = await fetch(`${process.env.API_URL}/resources`)
        const data = await dataRes.json()

        res.send(data)
    } else if (req.method === "POST" || req.method==="PATCH") {

         const { id, title, description, link, timeToFinish, priority } = req.body

         if (!title || !description || !link || !timeToFinish|| !priority) {
             return res.status(422).send("Data are missing")
         }

         const url = req.method === "POST"
         ? `${process.env.API_URL}/resources`
         : `${process.env.API_URL}/resources/${id}`
        

        try{
           const axiosRes = await axios[req.method.toLowerCase()](url,req.body)
            
            return res.send((await axiosRes).data)
        }catch{
            return status(422).send("Data cannot be stored")
        }
        

       
    }

}




