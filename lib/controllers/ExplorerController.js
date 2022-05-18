// Importando clases
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const readFileJSON = Reader.readJsonFile("explorers.json");
        const filterExplorerService = ExplorerService.filterByMission(readFileJSON, mission);
        return filterExplorerService;
    }

    static getExplorersUsernamesByMission(mission){
        const readFileJSON = Reader.readJsonFile("explorers.json");
        const filterUsernameByMission = ExplorerService.getExplorersUsernamesByMission(readFileJSON, mission);
        return filterUsernameByMission;
    }

    static getExplorersAmonutByMission(mission){
        const readFileJSON = Reader.readJsonFile("explorers.json");
        const getExplorersAmonut = ExplorerService.getAmountOfExplorersByMission(readFileJSON, mission);
        return getExplorersAmonut;
    }
}

module.exports = ExplorerController; 