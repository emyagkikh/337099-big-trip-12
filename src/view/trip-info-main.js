export const createTripInfoMain = (events) => {

  const generateTripRoute = () => {
    return (`${events.map((event) => event.destination).join(` `)}`);
  };

  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${generateTripRoute()}</h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>
  `;
};
