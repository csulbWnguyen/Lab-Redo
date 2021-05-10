// Load packages and access services
const express = require("express");
const app = express();

// Setup view engine to ejs
app.set('view engine', 'ejs');

// Serve static content directly
app.use(express.static("css"));

// Setup routes

// Route to welcome page
app.get('/', (request, response) => {
    response.render("index");
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});

// Route to services page
app.get('/services', (request, response) => {
    //Data
    const name = "Amy";
    const data = {
        years: 5,
        services: [
            {
                name: "Consulting",
                desc: "State of the art consulting services"
            },
            {
                name: "Education",
                desc: "Educate your work force"
            },
            {
                name: "Security",
                desc: "Secure your network"
            }
        ]  
    };
    response.render("services", {
        name: name,
        data: data});
});