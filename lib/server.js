const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
// const { request } = require("express");
// const { response } = require("express");

const app = express();
app.use(express.json());

const port = 3001;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, userExplorer: explorersUsernames});
});

// Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
}); 

// module.exports = app;