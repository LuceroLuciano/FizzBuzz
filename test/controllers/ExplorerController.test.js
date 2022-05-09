const ExplorerController = require('./../../lib/controllers/ExplorerController')
const Reader = require('./../../lib/utils/Reader')

describe("Unit Test Controllers", () => {
    test("1. Test for to filter a list of explorers where the mission is equal node", () => {
        const filteListExplorersInNode = ExplorerController.getExplorersByMission("node")
        console.log(filteListExplorersInNode)
        expect(filteListExplorersInNode.length).toBe(10) 
    })

    test("2. Test for show a list of usernames where mission is equal node", () => {
        const readerFile = Reader.readJsonFile("explorers.json")
        const filterUsernameByMission = ExplorerController.getExplorersUsernamesByMission(readerFile, "node")        
        expect(filterUsernameByMission[0]).toBe("ajolonauta1")
        console.log(filterUsernameByMission)
    })
})