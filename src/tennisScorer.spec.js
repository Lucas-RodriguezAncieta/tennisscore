import { TennisScorer } from "./tennisScorer.js";

describe("TennisScorer", () => {
    it("game empieza con ambos en cero", () => {
        const score = new TennisScorer();
        expect(score.showScore()).toEqual("Love - Love");
    });

    
});