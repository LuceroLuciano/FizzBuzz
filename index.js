const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");


console.log(explorers);

console.log(ExplorerService.filterByMission(explorers, "node"));

console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));


const explorer1 = {name: "Explorer1", score: 1};
console.log(FizzbuzzService.applyValidationInExplorer(explorer1));

const explorer2 = {name: "Explorer2", score: 3};
console.log(FizzbuzzService.applyValidationInExplorer(explorer2));

const explorer3 = {name: "Explorer3", score: 5};
console.log(FizzbuzzService.applyValidationInExplorer(explorer3));

const explorer4 = {name: "Explorer4", score: 15};
console.log(FizzbuzzService.applyValidationInExplorer(explorer4));


/*------------- */
console.log("Probando el nuevo metodo static applyValidationInNumber")
const explorer5 = {name: "Explorer5", score: 7
};
console.log(FizzbuzzService.applyValidationInNumber(explorer5));