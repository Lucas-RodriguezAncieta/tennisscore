import { TennisScorer } from "./tennisScorer.js";

describe("TennisScorer", () => {
    it("game empieza con ambos en cero", () => {
        const score = new TennisScorer();
        expect(score.showScore()).toEqual("Love - Love");
    });

    it("player 1 anota un punto y el jugador no anota nada 1-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        expect(score.showScore()).toEqual("15 - Love");
    });
    
});