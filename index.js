import { html, render } from 'lit-html';
import Board from './board';
import CharacterTable from './character/index'
import CharacterForm from './character/create'

const characters = [];

const tickTemplate = (ticks) => html`ticks: <strong>${ticks}</strong>`;

window.onload = () => {
  const tickDiv = document.getElementById('tickDiv');

  const board = new Board(document.getElementById('container'), 20, 80);
  const characterForm = new CharacterForm(document.getElementById('characterCreator'), characters, board);
  const characterList = new CharacterTable(document.getElementById('characterList'), characters);

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
