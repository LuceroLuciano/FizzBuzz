class ExplorerService {
    

    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission)
        return explorersInNode
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amounExplorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        const explorersAmoung =  amounExplorersInNode.length
        return explorersAmoung
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const usernamesInNode = explorers.filter((explorer) => explorer.mission === mission);
        return usernamesInNode.map((explorer) => explorer.githubUsername)
    }
}

module.exports = ExplorerService