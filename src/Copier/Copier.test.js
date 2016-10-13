import Copier from './Copier';

describe('Character Copier', () => {
  it('should copy character from source to destination', () => {
    const destination = {
      setCharacter(character) {
        window.console.info('setting char ', character);
      },
    };
    spyOn(destination, 'setCharacter');

    const source = {
      getCharacter() {},
    };
    spyOn(source, 'getCharacter').and.returnValues('x', '\n');

    const copier = new Copier(source, destination);
    copier.copy();

    expect(destination.setCharacter).toHaveBeenCalledWith('x');
  });

  it('should stop copying when new line is encountered', () => {
    const destination = {
      setCharacter(character) {
        window.console.info('setting char ', character);
      },
    };
    spyOn(destination, 'setCharacter');

    const source = {
      getCharacter() {},
    };
    spyOn(source, 'getCharacter').and.returnValue('\n');

    const copier = new Copier(source, destination);
    copier.copy();
    expect(destination.setCharacter).not.toHaveBeenCalled();
  });

  it('should copy until new line is encountered', () => {
    const destination = {
      setCharacter(character) {
        window.console.info('setting char ', character);
      },
    };
    spyOn(destination, 'setCharacter');

    const source = {
      getCharacter() {},
    };
    spyOn(source, 'getCharacter').and.returnValues('a', 'b', '\n');

    const copier = new Copier(source, destination);
    copier.copy();

    expect(destination.setCharacter).toHaveBeenCalledWith('a');
    expect(destination.setCharacter).toHaveBeenCalledWith('b');
  });
});
