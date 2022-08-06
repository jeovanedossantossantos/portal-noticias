import axios from "axios";


export const api = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        Authorization: process.env.KEY_NEWS_API,
    }

})

console.log(process.env)