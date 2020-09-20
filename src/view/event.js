import {humanizeTime} from "../utils";

export const createTripEventsItem = (event) => {
  const {eventType, destination, price, checkingTime, checkoutTime, durationTime} = event;

  const generateOffersListTemplate = () => {
    const {offers} = event;

    return (`
      <ul class="event__selected-offers">
        ${offers.map(([offerTitle, offerPrice]) => `
           <li class="event__offer">
             <span class="event__offer-title">${offerTitle}</span>
                &plus;&nbsp;&euro;&nbsp;
             <span class="event__offer-price"> ${offerPrice}</span>
            </li>
          `).join(``)}
      </ul>
    `);
  };

  return `
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${eventType} to ${destination}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T14:30">${humanizeTime(checkingTime)}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T16:05">${humanizeTime(checkoutTime)}</time>
          </p>
          <p class="event__duration">${humanizeTime(durationTime , true)}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        ${generateOffersListTemplate()}

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};
