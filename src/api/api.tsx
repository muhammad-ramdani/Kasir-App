import axios from "axios";

const apiName = axios.create({
    baseURL: "http://68.183.103.154:8080/api/v1",
})

export default apiName;