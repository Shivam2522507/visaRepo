const express= require("express");
const app = express();
const cors = require('cors');
const post_route = require('./routes/postRoute');
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"})

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors({
    origin:'*'
}))


const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("Connected Successfully");
    app.use('/api',post_route);
})
.catch((err) =>{
    console.error(err);
});


app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
})


