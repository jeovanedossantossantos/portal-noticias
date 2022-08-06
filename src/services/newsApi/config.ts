import axios from "axios";
import {KEY_NEWS_API} from "../../const/env"
export const api = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        Authorization: KEY_NEWS_API,
    }

})