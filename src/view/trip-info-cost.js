export const createTripInfoCost = (price = 0, currency = `&euro;`) => {
  return `
    <p class="trip-info__cost">
      Total: ${currency}&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>
  `;
};
