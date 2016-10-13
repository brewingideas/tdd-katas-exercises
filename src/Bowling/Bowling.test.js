import Bowling from './Bowling';

describe('Bowling Game', () => {
  it('returns 5 when a 3 and 2 is bowled in the first frame', () => {
    const game = new Bowling();
    const frames = [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(5);
  });

  it('returns 7 when a 3 and 4 is bowled in the first frame', () => {
    const game = new Bowling();
    const frames = [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(7);
  });

  it('returns 10 when a 2 and 3 is bowled for frame 1 and frame 2', () => {
    const game = new Bowling();
    const frames = [2, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(10);
  });

  it('returns 20 when a 2 and 3 is bowled after a strike', () => {
    const game = new Bowling();
    const frames = [10, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(20);
  });

  it('returns 20 when a 2 and 3 is bowled after a strike in the middle of a set', () => {
    const game = new Bowling();
    const frames = [0, 0, 0, 0, 0, 0, 0, 4, 10, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(24);
  });

  it('returns 60 when three consecutive strikes are scores', () => {
    const game = new Bowling();
    const frames = [10, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(60);
  });

  it('returns 30 when three consecutive strikes are scores at the end of the game', () => {
    const game = new Bowling();
    const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 10];
    const score = game.score(frames);
    expect(score).toBe(30);
  });

  it('returns 12 when a 1 is bowled after a spare', () => {
    const game = new Bowling();
    const frames = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(12);
  });

  it('returns 12 when a 1 is bowled after a spare in the middle of a set', () => {
    const game = new Bowling();
    const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    const score = game.score(frames);
    expect(score).toBe(14);
  });

  it('returns 12 when a 1 is bowled after a spare in the middle of a set', () => {
    const game = new Bowling();
    const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 1];
    const score = game.score(frames);
    expect(score).toBe(11);
  });

  it('returns 300 when 12 consecutive strikes are scored in the game', () => {
    const game = new Bowling();
    const frames = [10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10];
    const score = game.score(frames);
    expect(score).toBe(300);
  });

  it('returns 132 with game `[3, 5, 4, 3, 5, 4, 3, 5, 7, 3, 8, 2, 8, 1, 10, 0, 4, 3, 10, 7, 2]`', () => {
    const game = new Bowling();
    const frames = [3, 5, 4, 3, 5, 4, 3, 5, 7, 3, 8, 2, 9, 1, 10, 0, 4, 3, 10, 7, 2];
    const score = game.score(frames);
    expect(score).toBe(132);
  });

  it('returns 142 with game `[6, 2, 3, 7, 5, 4, 10, 0, 5, 2, 10, 0, 10, 0, 10, 0, 6, 0, 3, 5, 0]`', () => {
    const game = new Bowling();
    const frames = [6, 2, 3, 7, 5, 4, 10, 0, 5, 2, 10, 0, 10, 0, 10, 0, 6, 0, 3, 5, 0];
    const score = game.score(frames);
    expect(score).toBe(142);
  });
});
