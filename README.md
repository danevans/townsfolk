# Townsfolk

This is a simulation of people in a town. Time goes by represented by "ticks." The dotted field, or the board, represents the ground upon which the town is built.

Characters can be created and placed on the board. Once on the board the characters age and get hungry. If they reach 100 hunger they die. Before they die they can eat which lowers hunger by 25 but not below 0.

Once a character gets hungry enough (33) they will seek out food and move towards it. If they are next to food they'll feed themselves.

If their needs are met the townsfolk will move into adjacent, unoccupied squares randomly.

## Demo

View it running [here](https://danevans.github.io/townsfolk/)

## Future Improvements

- Thirst/water similar to hunger/food.
- Thirst/hunger increase slightly randomly.
- Make food/water consumable and limited in quantity.
- Other items on the board for the characters to interact with.
  - Tools and resources
  - Better entity class to handle all types
- Jobs the characters can be assigned which will change what they choose to do.
- Other effects of aging.
- Pathing and impassable objects (other characters, walls, water).
- Characters interacting, e.g. fighting.
  - Hit points or other health indicators.
- More natural water such as streams.

## Usage

### Requirements

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com)

### Setup

- Clone the repo.
- `yarn` (installs dependencies)
- `yarn run server` (runs the dev server)
- visit http://localhost:8080/
