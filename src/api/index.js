import axios from "axios"

const API = axios.create({baseURL:"http://localhost:8000"})


export const signInGoogle = (accessToken) => API.post("/auth/google/profile",{
    googleAccessToken: accessToken
})
export const signUpGoogle = (accessToken) => API.post("/api/signup",{
    googleAccessToken: accessToken
})