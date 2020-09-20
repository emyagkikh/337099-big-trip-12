export const createTripInfoMain = (events) => {

  const generateTripRoute = () => {
    return (`${events.map((event) => event.destination).join(` `)}`);
  };

  const generateTripDurationDates = () => {
    const monthArray = [
      `jan`,
      `feb`,
      `mar`,
      `apr`,
      `may`,
      `jun`,
      `jul`,
      `aug`,
      `sep`,
      `oct`,
      `nov`,
      `dec`,
    ];

    const firstCheckinDate = events[0].checkingTime;
    const lastCheckOutDate = events[events.length - 1].checkoutTime;

    return `${monthArray[firstCheckinDate.getMonth()]} ${firstCheckinDate.getDate()} — ${lastCheckOutDate.getDate()}`;
  };

  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${generateTripRoute()}</h1>
      <p class="trip-info__dates">${generateTripDurationDates()}</p>
    </div>
  `;
};
