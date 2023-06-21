// Import Express.js library
const express = require('express')

// Setup Express.js application
const app = express()
app.use(express.static(__dirname + "/public"))

// Run server on port 8080
const server = app.listen(8080, function () {
    console.log("Server is running!")
})
