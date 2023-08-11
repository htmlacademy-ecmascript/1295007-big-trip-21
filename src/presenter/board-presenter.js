import ListSortView from '../view/list-sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  pointsListComponent = new PointsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new ListSortView(), this.container);
    render(this.pointsListComponent, this.container);

    render(new PointEditView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  }
}
