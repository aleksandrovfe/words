const axios = require('axios')

let BASE_URL = 'https://wordsapiv1.p.rapidapi.com/words/'

let headers = {
    'Accept': 'application/json',
    'x-rapidapi-key': '51142fbe37mshac56c2c02f803c0p1a913ajsn107faec50d67',
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    "useQueryString": true
}

let axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: headers
})

axiosInstance.interceptors.request.use(
    async config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    })

module.exports = axiosInstance
