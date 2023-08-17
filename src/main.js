import TripInfoView from './view/trip-info-view.js';
import ListFiltersView from './view/list-filters-view.js';
import { render, RenderPosition } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const POINTS_COUNT = 3;

const tripInfoElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({container: tripEventsElement, pointsCount: POINTS_COUNT});

render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new ListFiltersView(), tripControlsFiltersElement);

boardPresenter.init();
