const express = require('express');

const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index-api.html");
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Server stared")
});