const express = require('express');
const port = 3000;


const app = express();
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render("index");
});

app.get('/contact', (request, response) => {
    response.send("Contact details");
});

app.listen(port);


