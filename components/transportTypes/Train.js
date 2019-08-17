const Transport = require('./Transport');

module.exports = class Train extends Transport {
    constructor(origin, destination, transport_id, seat_id) {
        super(origin, destination, transport_id, seat_id);
        this.transport_type = 'train';
        const seat_msg = this.seat_id ? `Sit in seat ${this.seat_id}` : `No seat assignment`;
        this.msg = `Take ${this.transport_type} ${this.transport_id} from ${this.origin} to ${this.destination}. ${seat_msg}.`
    }
}
