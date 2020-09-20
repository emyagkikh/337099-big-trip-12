import {getRandomInt, shuffleArray} from "../utils";

const destinationCityArray = [
  `Barnaul`,
  `Moscow`,
  `Saint-Petersburg`,
  `Kaliningrad`,
  `Kemerovo`,
  `Novosibirsk`,
  `Yaroslavl`,
  `Bangkok`,
  `Nha Trang`
];

const getDestinationCity = () => {
  return destinationCityArray[getRandomInt(0, destinationCityArray.length - 1)];
};

const getDestinationDescription = () => {
  const descriptionArray = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  return shuffleArray(descriptionArray).slice(0, getRandomInt(1, 4)).join(` `);
};

const getDestinationPhotos = () => {
  const MIN_PHOTOS_AMOUNT = 1;
  const MAX_PHOTOS_AMOUNT = 6;

  const destinationPhotosArray = new Array(getRandomInt(MIN_PHOTOS_AMOUNT, MAX_PHOTOS_AMOUNT)).fill(`*`);
  for (let link of destinationPhotosArray) {
    link = `http://picsum.photos/248/152?r=${Math.random()}`;
  }

  return destinationPhotosArray;
};

const getTravelType = () => {
  const travelTypeArray = [
    `stay`,
    `travel`,
  ];

  return travelTypeArray[getRandomInt(0, travelTypeArray.length - 1)];
};

const currentTravelType = getTravelType();

const stayEventTypeArray = [`Check-In`, `Sightseeing`, `Restaurant`];
const travelEventTypeArray = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];

const getEventType = () => {
  const eventTypeArray = {
    'stay': stayEventTypeArray,
    'travel': travelEventTypeArray,
  };

  return eventTypeArray[currentTravelType][getRandomInt(0, eventTypeArray[currentTravelType].length - 1)];
};

const getEventOffers = () => {
  const offersArray = {
    'stay': {
      'Add luggage': 30,
      'Add meal': 15,
      'Switch to comfort class': 100,
      'Choose seats': 5,
      'Travel by train': 40,
    },
    'travel': {
      'Order Uber': 20,
      'Add breakfast': 50,
      'Book tickets': 40,
      'Lunch in city': 30,
      'Rent a car': 200,
    },
  };

  const entriesOfferArray = Object.entries(offersArray[currentTravelType]);

  return shuffleArray(entriesOfferArray).slice(0, getRandomInt(0, entriesOfferArray.length - 1));
};

const generateTimeStamps = () => {
  const currentDate = new Date();

  const minCheckInGap = 1000;
  const maxCheckInGap = 1000000;
  const minCheckOutGap = 100000;
  const maxCheckOutGap = 100000000;

  const checkIn = new Date(currentDate.getTime() + getRandomInt(minCheckInGap, maxCheckInGap));
  const checkOut = new Date(checkIn.getTime() + getRandomInt(minCheckOutGap, maxCheckOutGap));
  const duration = checkOut - checkIn;

  return {
    checkIn,
    checkOut,
    duration,
  };
};

export const generateEvent = () => {
  const {checkIn, checkOut, duration} = generateTimeStamps();
  return {
    stayEventTypes: stayEventTypeArray,
    travelEventTypes: travelEventTypeArray,
    destinations: destinationCityArray,
    eventType: getEventType(),
    destination: getDestinationCity(),
    offers: getEventOffers(),
    price: getRandomInt(20, 600),
    checkingTime: checkIn,
    checkoutTime: checkOut,
    durationTime: duration,
    description: getDestinationDescription(),
    photos: getDestinationPhotos(),
  };
};

