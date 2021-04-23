import axios from "axios";

export default async function activeresource(req,res){

    const axiosRes = axios.get(`${process.env.API_URL}/activeresource`)
    const resource = (await axiosRes).data

     return res.send(resource)
     

   
}