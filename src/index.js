import { html, render } from 'lit-html';
import Board from './board';
import CharacterTable from './character/index';
import CharacterForm from './character/create';
import Item from './item/model';

const characters = [];

const tickTemplate = (ticks) => html`ticks: <strong>${ticks}</strong>`;

window.onload = () => {
  const tickDiv = document.getElementById('tickDiv');

  const board = new Board(document.getElementById('container'), 20, 30);
  const characterForm = new CharacterForm(document.getElementById('characterCreator'), characters, board);
  const characterList = new CharacterTable(document.getElementById('characterList'), characters);

  const food = new Item(board.grid[10][15], Symbol.for('food'), 'o', 'brown');

  const processTick = () => {
    board.render();
    render(tickTemplate(board.ticks), tickDiv);
    characterList.render(board.ticks);
    characterForm.render();

    characters.forEach(char => {
      char.act(board);
    });

    board.ticks++;

    setTimeout(processTick, 400);
  };

  processTick();
}
