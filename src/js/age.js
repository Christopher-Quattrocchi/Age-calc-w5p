export default class Age {
  static mercuryYears = 0.24;
  static venusYears = 0.62;
  static marsYears = 1.88;
  static jupiterYears = 11.86;
  static saturnYears = 29.46;
  static uranusYears = 84;
  static neptuneYears = 165;
  static plutoYears = 248;

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
    this.mercuryAge = parseFloat((this.earthAge / mercuryAge).toFixed(1));
    return this;
  }

  venusCalculator() {
    this.venusAge = parseFloat((this.earthAge / 0.24).toFixed(1));
  }
}