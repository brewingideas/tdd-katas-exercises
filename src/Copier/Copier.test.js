import Copier from './Copier';

describe('Character Copier Should', () => {
  it('call source to get character', () => {
    const source = {
      getChar() {},
    };

    const spy = spyOn(source, 'getChar');

    let copier = new Copier(source);
    copier.copy();

    expect(spy).toHaveBeenCalled();
  });
  // pointless test
  it('get character from source', () => {

    const source = {
      getChar(){
      }
    };

    spyOn(source, 'getChar').and.returnValue('a');

    let copier = new Copier(source);
    copier.copy();

    expect(source.getChar()).toBe('a');
  });

});
