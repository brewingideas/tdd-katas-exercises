import MarsRover from './MarsRover';

describe('Mars Rover', () => {
  let turnRover;
  let moveRover;

  beforeEach(() => {
    turnRover = (direction, instruction) => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 1, y: 2, direction });
      rover.move(instruction);
      return rover;
    };

    moveRover = (direction, instruction) => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 1, y: 2, direction });
      rover.move(instruction);
      return rover;
    };
  });

  it('should hold terrain size information', () => {
    const rover = new MarsRover({ x: 5, y: 5 }, {});
    expect(rover.terrainUpperRightCoordinator).toEqual({ x: 5, y: 5 });
  });

  describe('shoulb be able to turn left', () => {
    it('from N to W with instruction `L`', () => {
      expect(turnRover('N', 'L').position.direction).toEqual('W');
    });

    it('from E to N with instruction `L`', () => {
      expect(turnRover('E', 'L').position.direction).toEqual('N');
    });

    it('from S to E with instruction `L`', () => {
      expect(turnRover('S', 'L').position.direction).toEqual('E');
    });

    it('from W to S with instruction `L`', () => {
      expect(turnRover('W', 'L').position.direction).toEqual('S');
    });

    it('from W to E with instruction `LL`', () => {
      expect(turnRover('W', 'LL').position.direction).toEqual('E');
    });

    it('from W to N with instruction `LLL`', () => {
      expect(turnRover('W', 'LLL').position.direction).toEqual('N');
    });
  });

  describe('should be able to trun right', () => {
    it('from N to E with instruction `R`', () => {
      expect(turnRover('N', 'R').position.direction).toEqual('E');
    });

    it('from E to S with instruction `R`', () => {
      expect(turnRover('E', 'R').position.direction).toEqual('S');
    });

    it('from S to W with instruction `R`', () => {
      expect(turnRover('S', 'R').position.direction).toEqual('W');
    });

    it('from W to N with instruction `R`', () => {
      expect(turnRover('W', 'R').position.direction).toEqual('N');
    });

    it('from W to E with instruction `RR`', () => {
      expect(turnRover('W', 'RR').position.direction).toEqual('E');
    });

    it('from W to S with instruction `RRR`', () => {
      expect(turnRover('W', 'RRR').position.direction).toEqual('S');
    });
  });

  describe('should be able move forward', () => {
    it('from { 1, 2 } to { 0, 2 } when facing W', () => {
      const position = moveRover('W', 'M').position;
      expect(position.x).toBe(0);
      expect(position.y).toBe(2);
    });

    it('from { 1, 2 } to { 1, 3 } when facing N', () => {
      const position = moveRover('N', 'M').position;
      expect(position.x).toBe(1);
      expect(position.y).toBe(3);
    });

    it('from { 1, 2 } to { 2, 2 } when facing E', () => {
      const position = moveRover('E', 'M').position;
      expect(position.x).toBe(2);
      expect(position.y).toBe(2);
    });

    it('from { 1, 2 } to { 1, 1 } when facing S', () => {
      const position = moveRover('S', 'M').position;
      expect(position.x).toBe(1);
      expect(position.y).toBe(1);
    });
  });

  describe('should not move outside of the terrain', () => {
    it('from { 0, 2 } to { 0, 2 } when facing W', () => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 0, y: 2, direction: 'W' });
      rover.move('M');

      expect(rover.position.x).toBe(0);
      expect(rover.position.y).toBe(2);
    });

    it('from { 1, 5 } to { 1, 5 } when facing N', () => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 1, y: 5, direction: 'N' });
      rover.move('M');

      expect(rover.position.x).toBe(1);
      expect(rover.position.y).toBe(5);
    });

    it('from { 5, 2 } to { 5, 2 } when facing E', () => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 5, y: 2, direction: 'E' });
      rover.move('M');

      expect(rover.position.x).toBe(5);
      expect(rover.position.y).toBe(2);
    });

    it('from { 1, 0 } to { 1, 0 } when facing S', () => {
      const rover = new MarsRover(
        { x: 5, y: 5 },
        { x: 1, y: 0, direction: 'S' });
      rover.move('M');

      expect(rover.position.x).toBe(1);
      expect(rover.position.y).toBe(0);
    });
  });

  it('should move with complex instructions', () => {
    const rover = new MarsRover(
      { x: 5, y: 5 },
      { x: 1, y: 2, direction: 'N' });
    rover.move('LMLMLMLMM');

    expect(rover.position.x).toBe(1);
    expect(rover.position.y).toBe(3);
    expect(rover.position.direction).toBe('N');
  });
});
