import { api } from "./config"

export const getTopHeadline = async () =>{
    try {
        const response = await api.get("/top-headlines?country=br")
        return response.data
    }catch(err){

    }
}