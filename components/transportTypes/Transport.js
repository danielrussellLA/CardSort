module.exports = class Transport {
    constructor(origin, destination, transport_id, seat_id) {
        this.origin = origin;
        this.destination = destination;
        this.transport_id = transport_id;
        this.seat_id = seat_id;
    }
}
