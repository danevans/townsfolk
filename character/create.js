import { html, render } from 'lit-html';
import Character from './model';

const characterCreatorTemplate = (height, width) => html`
  <form id="characterForm">
    <label>X:</label>
    <select id="colInput">
      ${[...Array(width)].map((_, i) => html`<option>${i}</option>`)}
    </select>

    <label>Y:</label>
    <select id="rowInput">
      ${[...Array(height)].map((_, i) => html`<option>${i}</option>`)}
    </select>

    <label>Color:</label>
    <select id="colorInput">
      <option>olive</option>
      <option>green</option>
      <option>blue</option>
      <option>maroon</option>
      <option>cadetblue</option>
      <option>brown</option>
      <option>navy</option>
      <option>chocolate</option>
      <option>cornflowerblue</option>
      <option>darkgoldenrod</option>
      <option>darkslategray</option>
      <option>darkolivegreen</option>
      <option>firebrick</option>
    </select>

    <button>Create</button>
  </form>
`;

export default class CharacterForm {
  constructor(node, characters, board) {
    this.node = node;
    this.board = board;

    this.render();

    node.querySelector('#characterForm').addEventListener('submit', event => {
      event.preventDefault();

      characters.push(
        new Character(
          board.grid[node.querySelector('#rowInput').value]
                    [node.querySelector('#colInput').value],
          'h',
          node.querySelector('#colorInput').value,
          board.ticks
        )
      );
    });
  }

  render() {
    const html = characterCreatorTemplate(this.board.height, this.board.width);
    render(html, this.node);
    return html;
  }
}
