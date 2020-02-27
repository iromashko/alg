function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory;
  return pilotDroidFactory;
}
function battleDroidFactory() {
  return new B1();
}
function pilotDroidFactory() {
  return new Rx24();
}
class B1 {
  info() {
    return 'B1';
  }
}
class Rx24 {
  info() {
    return 'Rx24';
  }
}
