const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Pruebas de unidad para Explorer Services", () => {
    test('Requerimiento 1: Filtrar la lista por mision node', () => {
        const explorers = [{mission: "node"}]
        const filterMissionByNode = ExplorerService.filterByMission(explorers, "node")
        expect(filterMissionByNode.explorers).toBe(mission === "node")
       
    })
})