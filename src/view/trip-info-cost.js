export const createTripInfoCost = (events) => {
  const calculateTotalCost = () => {
    let eventsTotalCost = 0;
    let offersTotalCost = 0;

    events.map((event) => {
      eventsTotalCost += event.price;
      event.offers.map((offer) => {
        offersTotalCost += offer[1];
      });
    });


    return eventsTotalCost + offersTotalCost;
  };

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${calculateTotalCost()}</span>
    </p>
  `;
};
