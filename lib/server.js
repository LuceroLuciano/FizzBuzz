const ExplorerController = require("./controllers/ExplorerController");
const express = require('express');
const app = express()
app.use(express.json());
const port = 3000;

app.get('/v1/explorers/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission)
})

// Creando endpoint para regresar la cantidad de explorers segun la mission se envie

// Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
})