const Reader = require("./../../lib/utils/Reader");

describe("Unit Test of explorers list", () => {
    test("1. Test for read the file json that contain a list of explorers", () => {
        const filePath =  "explorers.json";
        const readingFilePath = Reader.readJsonFile(filePath);
        expect(readingFilePath[0].name).toBe("Woopa1");
    });
});