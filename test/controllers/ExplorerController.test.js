const ExplorerService = require('../../lib/services/ExplorerService')
const ExplorerController = require('./../../lib/controllers/ExplorerController')
const Reader = require('./../../lib/utils/Reader')

describe("Unit Test Controllers", () => {
    test("1. Test for to filter a list of explorers where the mission is equal node", () => {
        const filteListExplorersInNode = ExplorerController.getExplorersByMission("node")
        expect(filteListExplorersInNode.length).toBe(10) 
    })

    test("2. Test for show a list of usernames where mission is equal node", () => {
        const filterUsernameByMission = ExplorerController.getExplorersUsernamesByMission("node")        
        expect(filterUsernameByMission[0]).toBe("ajolonauta1")
    })

    test("3. Test for amount of explorer in mission node", () => {
        const getAmountOfExplorersByMission = ExplorerController.getExplorersAmonutByMission("node")
        expect(getAmountOfExplorersByMission).toBe(10)
    })
})