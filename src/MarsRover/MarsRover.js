class MarsRover {
  constructor(terrainUpperRightCoordinator, position) {
    this.terrainUpperRightCoordinator = terrainUpperRightCoordinator;
    this.position = position;
    this.directions = ['N', 'E', 'S', 'W'];
    this.moveForward = () => ({
      N: (coordinates, terrain) => {
        const newPosition = Object.assign({}, coordinates);
        if (coordinates.y < terrain.y) {
          newPosition.y += 1;
        }
        return newPosition;
      },
      E: (coordinates, terrain) => {
        const newPosition = Object.assign({}, coordinates);
        if (coordinates.x < terrain.x) {
          newPosition.x += 1;
        }
        return newPosition;
      },
      S: (coordinates, terrain) => {
        const newPosition = Object.assign({}, coordinates);
        if (coordinates.y > 0 && coordinates.y <= terrain.y) {
          newPosition.y -= 1;
        }
        return newPosition;
      },
      W: (coordinates, terrain) => {
        const newPosition = Object.assign({}, coordinates);
        if (coordinates.x > 0 && coordinates.x <= terrain.x) {
          newPosition.x -= 1;
        }
        return newPosition;
      },
    });
  }

  updateDirection(instruction) {
    const directionIndex = this.directions.indexOf(this.position.direction);

    if (instruction === 'L') {
      if (directionIndex === 0) {
        this.position.direction = this.directions[this.directions.length - 1];
      } else {
        this.position.direction = this.directions[directionIndex - 1];
      }
    }

    if (instruction === 'R') {
      if (directionIndex === (this.directions.length - 1)) {
        this.position.direction = this.directions[0];
      } else {
        this.position.direction = this.directions[directionIndex + 1];
      }
    }
  }

  move(instructions) {
    let instruction;
    for (let i = 0; i < instructions.length; i += 1) {
      instruction = instructions.charAt(i);
      if (instruction === 'M') {
        this.position = this.moveForward()[this.position.direction](
          this.position,
          this.terrainUpperRightCoordinator);
      } else {
        this.updateDirection(instruction);
      }
    }
  }
}

export default MarsRover;
