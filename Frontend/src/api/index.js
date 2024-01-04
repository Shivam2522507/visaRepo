import axios from "axios"

const API = axios.create({baseURL:`${process.env.REACT_APP_BACKEND_URL}`})


export const signInGoogle = (accessToken) => API.post("/auth/google/profile",{
    googleAccessToken: accessToken
})
export const signUpGoogle = (accessToken) => API.post("/api/signup",{
    googleAccessToken: accessToken
})