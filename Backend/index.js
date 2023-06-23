const express= require("express");
const app = express();
const cors = require('cors');
const post_route = require('./routes/postRoute');

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

mongoose.connect("mongodb://127.0.0.1:27017/Dubai_Visa",{
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


app.listen(8000,function(){
    console.log('server is running at 8000');
})



