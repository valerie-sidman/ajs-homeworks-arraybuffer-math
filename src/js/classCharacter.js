export default class Character {
  constructor() {
    this.isStoned = false;
    this.toAttack = 100;
    this.distance = 1;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value;
  }

  set attack(distance) {
    this.distance = distance;
    this.toAttack = 100 - (distance - 1) * 10;
  }

  get attack() {
    if (this.isStoned) {
      return this.toAttack - Math.log2(this.distance) * 5;
    }
    return this.toAttack;
  }
}
