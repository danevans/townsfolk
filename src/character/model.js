import { html } from 'lit-html';
import { randItem, randBool } from '../random';

function isFood(cell) {
  return cell.char && cell.char.type === Symbol.for('food');
}

let id = 1;

export default class Character {
  constructor(cell, glyph, color, startAt) {
    this.id = id;
    id++;
    this.glyph = glyph;
    this.color = color;

    this.startAt = startAt;
    this.hunger = 0;
    this.diedAt = null;

    this.cell = cell;
    cell.char = this;
  }

  age(ticks) {
    return (this.diedAt || ticks) - this.startAt;
  }

  template() {
    return html`
      <span style="color: ${this.color};">${this.glyph}</span>
    `;
  }

  moveTo(board, { x, y }) {
    // remove character from old cell
    this.cell.char = null;
    // look up new cell position
    const cell = board.grid[y][x];
    // assign new cell to char
    this.cell = cell;
    // assign new char to new cell
    cell.char = this;
  }

  moveToward(board, target) {
    // simplest version could be a straight line from this.cell to target.cell
    // don't worry about wrapping around the board here
    const xDist = this.cell.x - target.cell.x;
    const yDist = this.cell.y - target.cell.y;
    if (Math.abs(xDist) > Math.abs(yDist)) {
      this.moveTo(board, {
        x: this.cell.x + (xDist > 0 ? -1 : 1),
        y: this.cell.y,
      });
    } else if (yDist !== 0) {
      this.moveTo(board, {
        x: this.cell.x,
        y: this.cell.y + (yDist > 0 ? -1 : 1),
      });
    }
  }

  die(ticks) {
    this.glyph = 'x';
    this.diedAt = ticks;
  }

  act(board) {
    if (!this.diedAt) {
      // TODO: make this only happen sometimes, more likely the more hungry they already are
      this.hunger++;

      if (this.hunger > 99) {
        this.die(board.ticks);
      } else if (this.hunger > 33) {
        if (board.checkAround(this.cell, isFood)) {
          this.eat(25);
        } else {
          const food = board.find(isFood);
          if (food) {
            this.moveToward(board, food.char);
          }
        }
      } else {
        const dest = randItem(board.cellsAround(this.cell).filter(c => !c.char));
        if (dest && randBool()) {
          this.moveTo(board, dest);
        }
      }
    }
  }

  eat(amount) {
    this.hunger = Math.max(this.hunger - amount, 0);
  }
};
