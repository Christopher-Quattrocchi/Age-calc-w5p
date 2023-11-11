export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = null;
    this.venusAge = null;
    this.marsAge = null;
    this.jupiterAge = null;
    this.saturnAge = null;
    this.uranusAge = null;
    this.neptuneAge = null;
    this.plutoAge = null;
  }

  mercuryCalculator() {
    this.mercuryAge = parseFloat((this.earthAge / 0.24).toFixed(1));
    return this;
  }
}