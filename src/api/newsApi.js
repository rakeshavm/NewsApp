import axios from 'axios'

export const newsAPI = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        Authorization: "6e8ef846595743d89876da6a1a0e24a9"
    }
})
