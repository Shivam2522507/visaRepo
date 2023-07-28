const express= require("express");
const app = express();
const cors = require('cors');
const post_route = require('./routes/postRoute');
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"})
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use(errorMiddleware);

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors({
    // origin:'*'
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST" ,"PUT","DELETE"],
    credentials: true
}))


//new chng
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow sending cookies
//     next();
//   });

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


