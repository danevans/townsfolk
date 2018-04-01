# Townsfolk

This is a simulation of people in a town. Time goes by represented by "ticks." The dotted field, or the board, represents the ground upon which the town is built.

Characters can be created and placed on the board. Once on the board the characters age and get hungry. If they reach 100 hunger they die. Before they die they can be fed which lowers hunger by 25 but not below 0.

## Future Improvements

- Food on the board that the characters can move to themselves.
- Thirst/water similar to hunger/food.
- Other items on the board for the characters to interact with.
  - Tools and resources
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
