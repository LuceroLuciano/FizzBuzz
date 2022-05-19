class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        else if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
        else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(number){
        if(number.score % 5 === 0 && number.score % 3 === 0){
            return "FIZZBUZZ"
        }
        else if(number.score % 5 === 0){
            return "BUZZ"
        }
        else if(number.score % 3 === 0){
            return "FIZZ"
        }
        else {
            return number.score
        }
    }
}

module.exports = FizzbuzzService;