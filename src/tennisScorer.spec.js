import { TennisScorer } from "./tennisScorer.js";

describe("TennisScorer", () => {
  //PRUEBA DE INICIO 0-0
    it("game empieza con ambos en cero", () => {
        const score = new TennisScorer(); 
        const result = score.showScore(); 
        expect(result).toEqual("Love - Love");
    });
    //PRUEBAS PLAYER 1
    it("player 1 anota un punto y el jugador no anota, 1-0", () => {
         const score = new TennisScorer(); 
        score.player1Scores();            
        expect(score.showScore()).toEqual("15 - Love");
    });

    
    it("player 1 anota dos veces y el juegador no anota, 2-0", () => {
        const score = new TennisScorer();
        score.player1Scores();           
        score.player1Scores();           
        expect(score.showScore()).toEqual("30 - Love");
    });

    it("player 1 anota tres veces y el juegador no anota, 3-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        score.player1Scores();
        score.player1Scores();
        expect(score.showScore()).toEqual("40 - Love");
    });
    
    //PRUEBAS PARA PLAYER 2
    it("player 2 anota su primer punto y el jugador 2 no anota 0 - 1 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 15");
    });

    it("player 2 anota dos puntos y el jugador 2 no anota 0 - 2 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 30");
    });

    it("player 2 anota tres puntos y el jugador 2 no anota 0 - 3 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        score.player2Scores();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 40");
    });
});