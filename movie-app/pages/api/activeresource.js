import axios from "axios";

export default async function activeresource(req,res){

    const axiosRes = axios.get("http://localhost:3001/api/activeresource")
    const resource = (await axiosRes).data

     return res.send(resource)
     

   
}