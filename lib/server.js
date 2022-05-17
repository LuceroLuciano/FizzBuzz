// Creando un servidor basico
const express = require('express')
const app = express()
const port = 3000

// path iniciañ, respondera a la url localhost: 3000
app.get('/', (req, res) => {
    res.send("Hello World my dear explorer Lucero! 💞, Hello say Woopa!")
})

// Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})