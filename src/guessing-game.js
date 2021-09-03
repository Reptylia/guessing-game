class GuessingGame {
    constructor() {
        
    }
    setRange(min, max) {
    
    this.min1 = min;
    this.max2 = max;
    this.raznica = 0;

    this.poppy = Math.round(max / 2);

    }

    guess() {
    return this.poppy;
    }

    lower() {
    this.max2 = this.poppy;
    this.raznica = ((this.max2 - this.min1) / 2);
    this.poppy = Math.round(this.poppy - this.raznica);
    }

    greater() {
    this.min1 = this.poppy;
    // this.raznica = Math.round(this.raznica / 2);
    this.raznica = ((this.max2 - this.min1) / 2);
    this.poppy = Math.round(this.min1 + this.raznica);
    }
}

module.exports = GuessingGame;
