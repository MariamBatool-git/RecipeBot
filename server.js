// importing necessary dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const path = require("path");
// importing all routes from routes/api.js
const routes = require('./routes/api');

const app = express();
// port to run our server
const PORT = process.env.PORT || 3000;
// uri to connect to mongoDB
const MONGODB_URI = 'mongodb+srv://mariambatool:mary5376854@cluster0.hfxky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// connect to mongoDB
mongoose.connect( MONGODB_URI || 'mongodb://localhost/RecipeBotDatabase');
// run if successful connection
mongoose.connection.on('connected', ()=>{
    console.log("Mongoose is connected");
} );
// HTTP request logger to log http requests and errors
app.use(morgan('tiny'));

// use routes imported earlier
app.use('/', routes);

// starting server
app.listen(PORT, ()=>{
    console.log(`Server is starting at port ${PORT}`);
})