import axios from "axios";
import {KEY_NEWS_API} from "../../const/env"
const tokem = KEY_NEWS_API || process.env.KEY_NEWS_API
export const api = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        Authorization: tokem,
    }

})