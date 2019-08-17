const BASE_COMPONENT_PATH = './components'
const BASE_TRANSPORT_TYPE_PATH = `${BASE_COMPONENT_PATH}/transportTypes`

const Train = require(`${BASE_TRANSPORT_TYPE_PATH}/Train`);
const Flight = require(`${BASE_TRANSPORT_TYPE_PATH}/Flight`);
const AirportBus = require(`${BASE_TRANSPORT_TYPE_PATH}/AirportBus`);
const BoardingCard = require(`${BASE_COMPONENT_PATH}/BoardingCard`);
const BoardingCardList = require(`${BASE_COMPONENT_PATH}/BoardingCardList`);
const Trip = require(`${BASE_COMPONENT_PATH}/Trip`);

const card1 = new BoardingCard(new Train('Madrid', 'Barcelona', '78A', '45B'));
const card2 = new BoardingCard(new AirportBus('Barcelona', 'Gerona Airport'));
const card3 = new BoardingCard(new Flight('Gerona Airport', 'Stockholm', 'SK455', '3A', '45B', '344'));
const card4 = new BoardingCard(new Flight('Stockholm', 'New York JFK', 'SK22', '3A', '22'));
const cardList = new BoardingCardList([card3, card1, card4, card2])
const trip = new Trip(cardList);

console.log(trip.details());
