const express = require('express');
const port = 2000;



const handler = (request, response) => {
    console.log('new user!')
    response.end("Hello user")
}
const server = http.createServer(handler);

server.listen(port, (err) => {
    if (err) {
        return console.log("something went bad")
    }

    console.log("server is running...")
});
