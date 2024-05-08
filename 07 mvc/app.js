const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require("./controllers/error");

// 88. Working with Handlebars
const expressHbs = require("express-handlebars");

const app = express();

// 88. Working with Handlebars
// app.engine("hbs", expressHbs({layoutsDir: "views/layouts/", defaultLayouts: "main-layout", extname: "hbs"}));
// app.set("view engine" , "hbs");

// 91. Working with EJS
app.set("view engine" , "ejs");

// 81. Installing and Implementing Pug
// npm install --save ejs pug express-handlebars
//app.set("view engine" , "pug");
app.set("views", "views");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
