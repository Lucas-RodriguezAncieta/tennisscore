class TennisScorer {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }

    showScore() {

        if (this.player1Points === 3 && this.player2Points === 3) {
            return "Deuce";
        }

        if (this.player1Points === 1) {
            return "15 - Love";
        } else if (this.player1Points === 2) {
            return "30 - Love";
        }else if (this.player1Points === 3) {
            return "40 - Love";
        }

        if (this.player1Points === 0 &&  this.player2Points === 1){
            return "Love - 15";
        }else if (this.player1Points === 0 &&  this.player2Points === 2){
            return "Love - 30";
        } else if (this.player1Points === 0 && this.player2Points === 3){
            return "Love - 40";
        }

        if (this.player1Points >= 3 && this.player2Points >= 3) {
            if (this.player1Points === this.player2Points + 1) {
                return "Advantage for 1";
            } else if (this.player2Points === this.player1Points + 1) {
                return "Advantage for 2";
            }
        }

        if (this.player1Points === 3 && this.player2Points === 3) {
            return "Deuce";
        }


        return "Love - Love";
    }
    
    player1Scores() {
        this.player1Points++;
    }

    player2Scores() {
        this.player2Points++;
    }
}

export { TennisScorer };