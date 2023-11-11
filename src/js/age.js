export default class Age {
  static mercuryYears = 0.24;
  static venusYears = 0.615;
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
    this.mercuryAge = parseFloat((this.earthAge / Age.mercuryYears).toFixed(1));
    return this;
  }

  venusCalculator() {
    this.venusAge = parseFloat((this.earthAge / Age.venusYears).toFixed(1));
    return this;
  }

  marsCalculator() {
    this.marsAge = parseFloat((this.earthAge / Age.marsYears).toFixed(1));
    return this;
  }

  // jupiterCalculator() {
  //   this.jupiterAge = parseFloat((this.earthAge / Age.jupiterYears).toFixed(1));
  //   return thisaturn
  // }

  // saturnCalculator() {
  //   this.saturnAge = parseFloat((this.earthAge / Age.saturnYears).toFixed(1));
  //   return this;
  // }

  // uranusCalculator() {
  //   this.uranusAge = parseFloat((this.earthAge / Age.uranusYears).toFixed(1));
  //   return this;
  // }

  // neptuneCalculator() {
  //   this.neptuneAge = parseFloat((this.earthAge / Age.neptuneYears).toFixed(1));
  //   return this;
  // }

  // plutoCalculator() {
  //   this.plutoAge = parseFloat((this.earthAge / Age.plutoYears).toFixed(1));
  //   return this;
  // }
}