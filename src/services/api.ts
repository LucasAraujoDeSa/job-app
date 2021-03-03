import axios from "axios";


const api = axios.create({
  baseURL: 'https://my-app-job-api.herokuapp.com/'
})

export default api
