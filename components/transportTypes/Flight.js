const Transport = require('./Transport');

module.exports = class Flight extends Transport {
    constructor(origin, destination, transport_id, seat_id, gate, baggage_drop) {
        super(origin, destination, transport_id, seat_id);
        this.transport_type = 'flight';
        this.gate = gate;
        this.baggage_drop = baggage_drop;
        var baggage_drop_msg = this.baggage_drop ? `Baggage drop at ticket counter ${this.baggage_drop}` : `Baggage will be automatically transferred from your last leg`;
        this.msg = `From ${this.origin}, take ${this.transport_type} ${this.transport_id} to ${this.destination}. Gate ${this.gate}, seat ${this.seat_id}. ${baggage_drop_msg}.`
    }
}
