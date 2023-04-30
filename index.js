/** ------------------ IMPORTING PACKAGE ------------------ **/
const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');


// setting layouts
app.use(expressLayouts);

//accesing static files from assets folder
app.use(express.static('assets'));    

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// setting up routes
app.use('/', require('./routes'));

// directing the app in the given port 
app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});