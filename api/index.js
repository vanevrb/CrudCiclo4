const express = require("express");
const app = express();
const port = 5000;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require("morgan");

const routes = require("./controllers/routes");
app.use(express.json());
app.use((req,res,next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
}
);
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/products', routes)
app.listen(port,() =>{;
    console.log(`El puerto es ${port}`);
}
)