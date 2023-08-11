import TripInfoView from './view/trip-info-view.js';
import ListFiltersView from './view/list-filters-view.js';
import { render, RenderPosition } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripInfoElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({ container: tripEventsElement });

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new ListFiltersView(), tripControlsFiltersElement);

boardPresenter.init();
