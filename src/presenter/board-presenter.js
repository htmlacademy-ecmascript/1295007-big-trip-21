import PointSortView from '../view/point-sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointEditView from '../view/point-edit-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  pointSortComponent = new PointSortView();
  pointListComponent = new PointListView();
  pointEditComponent = new PointEditView();

  constructor({container, pointsCount}) {
    this.container = container;
    this.pointsCount = pointsCount;
  }

  getPointViewList() {
    for (let i = 0; i < this.pointsCount; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  }

  init() {
    render(this.pointSortComponent, this.container);
    render(this.pointListComponent, this.container);
    render(this.pointEditComponent, this.pointListComponent.getElement());

    this.getPointViewList();
  }
}
