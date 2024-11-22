import axios from "axios";

const apiName = axios.create({
    baseURL: "http://68.183.103.154:8080/api/v1",
})

// tambahkan token ke setiap request secara otomatis
apiName.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// tangani error response
apiName.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
)
export default apiName;