// Importando clases
const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const readFileJSON = Reader.readJsonFile("explorers.json");
        const filterExplorerService = ExplorerService.filterByMission(readFileJSON, mission)
        return filterExplorerService;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const readFileJSON = Reader.readJsonFile("explorers.json");
        const filterUsernameByMission = explorers.filter((explorerUsername) => explorerUsername.mission === mission)        
        return filterUsernameByMission.map((filterUsernameByMission) => filterUsernameByMission.githubUsername);
    }
}

module.exports = ExplorerController; 