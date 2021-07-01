import axios from  "axios";
import queryString from "query-string" //npm install query-string

const axiosClient = axios.create(
    {
        baseURL : "https://60b61bcafe923b0017c855e5.mockapi.io/",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        paramsSerializer : param => queryString.stringify(param),
    }
);

axiosClient.interceptors.request.use(async (config) => {
    var token = getAccesToken();
    if(token){
        if(new Date(token['.expires']) <= new Date() && token.refresh_token){
            refreshToken(token.refresh_token);
        }
    }
    config.headers.Authorization = `Bearer ${token.acess_token}`;
    return config;
});
const getAccesToken = () => {
    let token = sessionStorage.getItem("_accessToken");
    return JSON.parse(token?token:"");
}
const setAccessToken = (token:any) => {
    sessionStorage.setItem("_accessToken", JSON.stringify(token));
}
const refreshToken = (refreshToken:string) => {
    setAccessToken("");
    var data = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: "koFeApp"
    };
    return axiosClient.post("/oauth/token", queryString.stringify(data)).then(
         (token) =>{
        setAccessToken(token);
    });
}
axiosClient.interceptors.response.use((response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },
    (error) =>{
        throw error;
    }
);
export default axiosClient;