const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config();

const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');

//connection with database
const url = 'mongodb://127.0.0.1:27017/Breathe';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended : true}));

app.use('/',indexRouter);
app.use('/',authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,process.env.IP,function(){
	console.log("The Breathe Server Is Started",PORT);
});