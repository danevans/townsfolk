import { html, render } from 'lit-html';

const cellTemplate = (cell) => html`
  <span>${cell.char ? cell.char.template() : '.'}</span>
`;

const rowTemplate = (row) => html`
  <div class="row">${row.map(cellTemplate)}</div>
`;

const boardTemplate = (grid) => html`
  <div class="board">${grid.map(rowTemplate)}</div>
`;

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const nTimes = (n, f) => [...Array(n)].map((_, index) => f(index));
const createCells = (row, n) => nTimes(n, index => new Cell(index, row));
const createRows = (n, width) => nTimes(n, index => createCells(index, width));

export default class Board {
  constructor(node, height, width) {
    this.node = node;
    // There are problems inheriting directly from Array
    this.grid = createRows(height, width);
    this.ticks = 0;

    this.height = height;
    this.width = width;
  }

  render() {
    render(boardTemplate(this.grid), this.node);
  }
}
