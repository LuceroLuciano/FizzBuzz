const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test of unit", () => {
    test("Requerimiento 1: Si score es divisible entre 3, campo trick = FIZZ", () => {
        const explorer = [{score: 3}, {trick: "FIZZ"}];
        const validationInExplorer = FizzbuzzService.applyValidationInExplorer(explorer[0]);
        expect(validationInExplorer.trick).toBe("FIZZ");
    }),
    test("Requerimiento 2: Si score es divisible entre 5, campo trick = BUZZ", () => {
        const explorer = [{score: 5}, {trick: "BUZZ"}];
        const validationInExplorer = FizzbuzzService.applyValidationInExplorer(explorer[0]);
        expect(validationInExplorer.trick).toBe("BUZZ");
    }),
    test("Requerimiento 3: Si score es divisible entre 3 y 5, campo trick = FIZZBUZZ", () => {
        const explorer = [{score: 15}, {trick: "FIZZBUZZ"}];
        const validationInExplorer = FizzbuzzService.applyValidationInExplorer(explorer[0]);
        expect(validationInExplorer.trick).toBe("FIZZBUZZ");
    }),
    test("Requerimiento 4: Si score NO es divisible entre 3 y 5, campo trick = score", () => {
        const explorer = [{score: 11}, {trick: 11}];
        const validationInExplorer = FizzbuzzService.applyValidationInExplorer(explorer[0]);
        expect(validationInExplorer.score).toBe(11);
    });
    
});

describe("Test's unit of FIZZBUZZ without trick", () => {
    test("score es divisible entre 3 -> FIZZ", () => {
        const numberExplorer = 3;
        const validationInNumber = FizzbuzzService.applyValidationInNumber(numberExplorer);
        expect(validationInNumber).toBe("FIZZ");
    });

    test("score es divisible entre 5 -> BUZZ", () => {
        const numberExplorer = 5;
        const validationInNumber = FizzbuzzService.applyValidationInNumber(numberExplorer);
        expect(validationInNumber).toBe("BUZZ");
    });

    test("score es divisible entre 15 -> FIZZBUZZ", () => {
        const numberExplorer = 15;
        const validationInNumber = FizzbuzzService.applyValidationInNumber(numberExplorer);
        expect(validationInNumber).toBe("FIZZBUZZ");
    });

    test("score no es divisible -> SCORE", () => {
        const numberExplorer = 7;
        const validationInNumber = FizzbuzzService.applyValidationInNumber(numberExplorer);
        expect(validationInNumber).toBe(7);
    });
});