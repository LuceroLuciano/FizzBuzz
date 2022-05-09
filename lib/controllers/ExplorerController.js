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
}

module.exports = ExplorerController; // Exportando la clase