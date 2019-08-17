Array.prototype.diff = function(a) {
    return this.filter(function(i) { return a.indexOf(i) < 0; });
};

module.exports = class BoardingCardList {
    constructor(boardingCards)  {
        this.boardingCards = boardingCards;
    }

    sort() {
        const cards = [...this.boardingCards];
        const places = cards.reduce((acc, card) => {
            acc.origins.push(card.transportation.origin)
            acc.destinations.push(card.transportation.destination);
            return acc;
        }, { origins: [], destinations: [] })

        const start = places.origins.diff(places.destinations)[0];
        const sorted = []
        let i = 0
        while (cards.length) {
            const card = cards[i];
            const last = sorted[sorted.length - 1];
            if (card.transportation.origin === start) {
                sorted.push(card);
                cards.splice(i, 1);
                i = 0;
            } else if (last && card.transportation.origin === last.transportation.destination) {
                sorted.push(card);
                cards.splice(i, 1);
                i = 0;
            } else {
                i++
            }
        }
        return sorted;
    }
}
