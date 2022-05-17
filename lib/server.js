const explorerController = require("./controllers/ExplorerController")
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000;

// path iniciañ, respondera a la url localhost: 3000
app.get('/', (request, response) => {
    response.json({message: "FizzBuzz Api Welcome!"})
})

// Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
})