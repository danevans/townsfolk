import { html } from 'lit-html';

let id = 1;

export const types = new Set([
  Symbol.for('food'),
  Symbol.for('water'),
  Symbol.for('character'),
]);

export default class Item {
  constructor(cell, type, glyph, color) {
    this.id = id;
    id++;

    if (!types.has(type)) {
      throw new Error('Not a valid Item type.');
    }

    this.type = type;
    this.glyph = glyph;
    this.color = color;

    this.cell = cell;
    // TODO: Rename this, maybe entity, more general class
    cell.char = this;
  }

  template() {
    return html`
      <span style="color: ${this.color};">${this.glyph}</span>
    `;
  }
};
