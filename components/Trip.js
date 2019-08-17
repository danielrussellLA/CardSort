module.exports = class Trip {
    constructor(boardingCardList) {
        if (!boardingCardList) {
            throw new Error('boardingCardList is undefined');
        }
        this.steps = boardingCardList.sort().map(card => card.transportation.msg)
    }

    details() {
        const details = this.steps.reduce((acc, tripStep) => acc += `- ${tripStep}\n`, '');
        return `${details}- You have arrived at your final destination`;
    }
}
