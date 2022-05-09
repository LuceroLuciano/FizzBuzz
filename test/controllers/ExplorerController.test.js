const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Unit Test Controllers", () => {
    test("1. Test for to filter a list of explorers where the mission is equal node", () => {
        const filteListExplorersInNode = ExplorerController.getExplorersByMission("node")
        console.log(filteListExplorersInNode)
        expect(filteListExplorersInNode.length).toBe(10) 
    })
})