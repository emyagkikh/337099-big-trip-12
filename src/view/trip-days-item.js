export const createTripDaysItem = (dayAmount) => {
  return `
    <li class="trip-days__item  day" data-amount="${dayAmount}">
      <div class="day__info">
        <span class="day__counter">${dayAmount}</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>
    </li>
  `;
};
