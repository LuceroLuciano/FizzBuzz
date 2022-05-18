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

app.get('/v1/explorers/amount/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersAmountMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountMission});
})

// Creando endpoint para regresar la cantidad de explorers segun la mission se envie

// Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
})