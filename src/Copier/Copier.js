class Copier {

  constructor(source, destination) {
    this.source = source;
    this.dest = destination;
  }

  copy() {
    let characteer = this.source.getCharacter();
    while (characteer !== '\n') {
      this.dest.setCharacter(characteer);
      characteer = this.source.getCharacter();
    }
  }
}

export default Copier;
