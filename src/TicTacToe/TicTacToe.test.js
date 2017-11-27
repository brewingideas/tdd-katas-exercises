import TicTacToe from './TicTacToe';

describe('TicTacToe Should', () => {

    it('Play a turn at 0,0 ', () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.Play(0,0)).toBeTruthy();
    });

    it('Return X for first player', () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.Player()).toBe('X');
    });

    it('Return Y for second player', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);

        expect(ticTacToe.Player()).toBe('Y');
    });

    it('Return X for third player', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);
        ticTacToe.Play(0,1);

        expect(ticTacToe.Player()).toBe('X');
    });

    it('Have no winner at start of game', () => {
        const ticTacToe = new TicTacToe();

        expect(ticTacToe.Winner()).toBe('');
    });

    it('Have no winner after first go', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);

        expect(ticTacToe.Winner()).toBe('');
    });

    it('Complete game with X as winner for first column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,0);
        ticTacToe.Play(0,1);
        ticTacToe.Play(1,2);
        ticTacToe.Play(0,2);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with X as winner for second column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(1,0);
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,1);
        ticTacToe.Play(0,1);
        ticTacToe.Play(1,2);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with X as winner for third column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(2,0);
        ticTacToe.Play(0,0);
        ticTacToe.Play(2,1);
        ticTacToe.Play(0,1);
        ticTacToe.Play(2,2);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with X as winner for first row', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);
        ticTacToe.Play(0,1);
        ticTacToe.Play(1,0);
        ticTacToe.Play(1,1);
        ticTacToe.Play(2,0);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with X as winner for second row', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,1);
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,1);
        ticTacToe.Play(2,0);
        ticTacToe.Play(2,1);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with X as winner for third row', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,2);
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,2);
        ticTacToe.Play(2,0);
        ticTacToe.Play(2,2);

        expect(ticTacToe.Winner()).toBe('X');
    });

    it('Complete game with Y as winner for first column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(1,0);
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,1);
        ticTacToe.Play(0,1);
        ticTacToe.Play(2,0);
        ticTacToe.Play(0,2);

        expect(ticTacToe.Winner()).toBe('Y');
    });

    it('Complete game with Y as winner for second column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);
        ticTacToe.Play(1,0);
        ticTacToe.Play(0,1);
        ticTacToe.Play(1,1);
        ticTacToe.Play(2,1);
        ticTacToe.Play(1,2);

        expect(ticTacToe.Winner()).toBe('Y');
    });

    it('Complete game with Y as winner for second column', () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.Play(0,0);
        ticTacToe.Play(2,0);
        ticTacToe.Play(0,1);
        ticTacToe.Play(2,1);
        ticTacToe.Play(1,1);
        ticTacToe.Play(2,2);

        expect(ticTacToe.Winner()).toBe('Y');
    });


});
