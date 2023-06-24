import axios from "axios";

class Post{
    create(formData){
        const url = "http://localhost:8000/api/contact";
        const config = {
            headers:{
                'content-type':'application/json',
            }
        };
        return axios.post(url, formData, config);
    }
}

export default new Post();