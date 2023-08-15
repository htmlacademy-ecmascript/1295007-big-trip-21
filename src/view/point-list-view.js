import { createElement } from '../render';

function pointsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointListView {
  getTemplate() {
    return pointsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
