const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Pruebas de unidad para Explorer Services", () => {
    test("Requerimiento 1: Filtrar la lista de explorers que estan en una mision", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");            
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Obtener la cantidad de explorers que estan en la mision node", () => {
        const explorers = [{mission: "node"}];
        const amounExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amounExplorersInNode).toBe(1);
    });

    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que estan en node", () => {
        const explorers = [{
            name: "Woopa5",
            githubUsername: "ajolonauta5",
            score: 5,
            mission: "node",
            stacks: [
                "javascript",
                "elixir",
                "elm"
            ]
        }];
        const usernamesInMissionNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInMissionNode[0]).toBe("ajolonauta5");
    });
   
});