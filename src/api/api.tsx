import axios from "axios";

const baseURL = "https://kasirapp.duckdns.org/api/v1"

const apiName = axios.create({
    baseURL: baseURL,
});


console.log(baseURL);


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