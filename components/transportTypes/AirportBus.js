const Transport = require('./Transport');

module.exports = class AirportBus extends Transport {
    constructor(origin, destination, transport_id, seat_id) {
        super(origin, destination, transport_id, seat_id);
        this.transport_type = 'airport bus';
        const seat_msg = this.seat_id ? `Sit in seat ${this.seat_id}` : `No seat assignment`;
        this.msg = `Take the ${this.transport_type} from ${this.origin} to ${this.destination}. ${seat_msg}.`
    }
}
