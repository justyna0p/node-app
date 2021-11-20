const express = require('express');
const port = 3000;


const app = express();

app.get('/', (request, response) => {
    response.send("Hello user!!!!")
});

app.get('/contact', (request, response) => {
    response.send("Contact details")
});

app.listen(port);


