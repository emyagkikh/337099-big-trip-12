import {createControlsContainer} from "./view/controls-container";
import {createControlsMenu} from "./view/controls-menu";
import {createEventForm} from "./view/event-form";
import {createTripEventsContainer} from "./view/events-container";
import {createTripEventsList} from "./view/events-list";
import {createFilterList} from "./view/filter-list";
import {createNewEventButton} from "./view/new-event-button";
import {createSortList} from "./view/sort-list";
import {createTripDaysItem} from "./view/trip-days-item";
import {createTripDaysList} from "./view/trip-days-list";
import {createTripEventsItem} from "./view/trip-events-item";
import {createTripInfo} from "./view/trip-info";
import {createTripInfoCost} from "./view/trip-info-cost";
import {createTripInfoMain} from "./view/trip-info-main";
import {generateLoop, render} from "./utils";

const LIST_DAYS_AMOUNT = 2;
const EVENT_POINTS_AMOUNT = 3;

const headerElement = document.querySelector(`.page-header`);
const headerTripMainElement = headerElement.querySelector(`.trip-main`);

render(headerTripMainElement, createTripInfo(), `beforeend`);
const headerTripInfo = headerTripMainElement.querySelector(`.trip-main__trip-info`);

if (headerTripInfo) {
  render(headerTripInfo, createTripInfoMain(), `beforeend`);
  render(headerTripInfo, createTripInfoCost(), `beforeend`);
}

render(headerTripMainElement, createControlsContainer(), `beforeend`);
render(headerTripMainElement, createNewEventButton(), `beforeend`);
const tripControls = headerTripMainElement.querySelector(`.trip-main__trip-controls`);

if (tripControls) {
  render(tripControls, createControlsMenu(), `beforeend`);
  render(tripControls, createFilterList(), `beforeend`);
}

const pageMain = document.querySelector(`.page-body__page-main`);
const pageMainContainer = pageMain.querySelector(`.page-body__container`);
render(pageMainContainer, createTripEventsContainer(), `beforeend`);

const tripEventsContainer = pageMainContainer.querySelector(`.trip-events`);
render(tripEventsContainer, createSortList(), `beforeend`);

render(tripEventsContainer, createEventForm(), `beforeend`);

render(tripEventsContainer, createTripDaysList(), `beforeend`);
const tripDaysContainer = tripEventsContainer.querySelector(`.trip-days`);

generateLoop(LIST_DAYS_AMOUNT, (item, i) => {
  render(tripDaysContainer, createTripDaysItem(i + 1), `beforeend`);
  const thisDay = tripDaysContainer.querySelector(`.trip-days__item[data-amount="${i + 1}"]`);

  if (thisDay) {
    render(thisDay, createTripEventsList(), `beforeend`);
    const tripEventsList = thisDay.querySelector(`.trip-events__list`);

    if (tripEventsList) {
      generateLoop(EVENT_POINTS_AMOUNT, () => render(tripEventsList, createTripEventsItem(), `beforeend`));
    }
  }
});
