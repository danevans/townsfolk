import { html, render } from 'lit-html';

const rowTemplate = (character, ticks) => html`
  <tr>
    <td>${character.template()}</td>
    <td>${character.cell.x}</td>
    <td>${character.cell.y}</td>
    <td>${character.age(ticks)}</td>
    <td>${character.hunger}</td>
    <td>${character.diedAt ? 'dead' : 'alive'}</td>
    <td>${!character.diedAt ? html`<button data-character-id="${character.id}">Feed</button>` : ''}</td>
  </tr>
`;

const tableTemplate = (characters, ticks) => html`
  <table>
    <thead>
      <tr>
        <th>Char</th>
        <th>X</th>
        <th>Y</th>
        <th>Age</th>
        <th>Hunger</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>${characters.map(c => rowTemplate(c, ticks))}</tbody>
  </table>
`;

export default class characterIndex {
  constructor(node, characters) {
    this.node = node;
    this.characters = characters;

    node.addEventListener('click', event => {
      if (event.target.textContent === 'Feed') {
        const id = Number.parseInt(event.target.dataset.characterId, 10);
        characters.find(c => c.id === id).eat(25);
      }
    });
  }

  render(ticks) {
    render(tableTemplate(this.characters, ticks), this.node);
  }
}
