const express= require("express");
const app = express();
const cors = require('cors');
const post_route = require('./routes/postRoute');
const visa_route = require('./routes/visaCardRoutes');
// const travelBookingRoute = require('./routes/travelBookingRoute');
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"})
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");
const applyVisaRouter = require('./routes/applyVisaRoute');
const uploadVisaRouter = require('./routes/uploadVisaRouter')


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
// app.use(cors());
app.use(express.static('public'));

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("Connected Successfully");
    app.use('/api',post_route);
    app.use('/api',visa_route);
    // app.use('/api',travelBookingRoute);
    app.use('/api',applyVisaRouter);
    app.use('/api',uploadVisaRouter);
  

})
.catch((err) =>{
    console.error(err);
});


app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
})


