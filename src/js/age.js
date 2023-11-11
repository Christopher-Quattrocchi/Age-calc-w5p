export default class Age {
  static mercuryYears = 0.241;
  static venusYears = 0.615;
  static marsYears = 1.88;
  static jupiterYears = 11.86;
  static saturnYears = 29.46;
  static uranusYears = 84;
  static neptuneYears = 165;
  static plutoYears = 248;

  constructor(earthAge, futureAge) {
    //Age in years for each planet including pluto
    this.earthAge = earthAge;
    this.futureAge = futureAge;
    this.mercuryAge = null;
    this.venusAge = null;
    this.marsAge = null;
    this.jupiterAge = null;
    this.saturnAge = null;
    this.uranusAge = null;
    this.neptuneAge = null;
    this.plutoAge = null;
    //Years until a certain age for each planet
    this.yearsUntilAgeEarth = null;
    this.yearsUntilAgeMercury = null;
    this.yearsUntilAgeVenus = null;
    this.yearsUntilAgeMars = null;
    this.yearsUntilAgeJupiter = null;
    this.yearsUntilAgeSaturn = null;
    this.yearsUntilAgeUranus = null;
    this.yearsUntilAgeNeptune = null;
    this.yearsUntilAgePluto = null;
  }



  mercuryCalculator() {
    this.mercuryAge = parseFloat((this.earthAge / Age.mercuryYears).toFixed(2));
    return this;
  }

  venusCalculator() {
    this.venusAge = parseFloat((this.earthAge / Age.venusYears).toFixed(2));
    return this;
  }

  marsCalculator() {
    this.marsAge = parseFloat((this.earthAge / Age.marsYears).toFixed(2));
    return this;
  }

  jupiterCalculator() {
    this.jupiterAge = parseFloat((this.earthAge / Age.jupiterYears).toFixed(2));
    return this;
  }

  saturnCalculator() {
    this.saturnAge = parseFloat((this.earthAge / Age.saturnYears).toFixed(2));
    return this;
  }

  uranusCalculator() {
    this.uranusAge = parseFloat((this.earthAge / Age.uranusYears).toFixed(2));
    return this;
  }

  neptuneCalculator() {
    this.neptuneAge = parseFloat((this.earthAge / Age.neptuneYears).toFixed(2));
    return this;
  }

  plutoCalculator() {
    this.plutoAge = parseFloat((this.earthAge / Age.plutoYears).toFixed(2));
    return this;
  }

  futureBirthday() {
    this.yearsUntilAgeEarth = this.futureAge - this.earthAge;
    this.yearsUntilAgeMercury = (this.futureAge - this.earthAge) / Age.mercuryYears;
    this.yearsUntilAgeVenus = (this.futureAge - this.earthAge) / Age.venusYears;
    this.yearsUntilAgeMars = (this.futureAge - this.earthAge) / Age.marsYears;
    this.yearsUntilAgeJupiter = (this.futureAge - this.earthAge) / Age.jupiterYears;
    this.yearsUntilAgeSaturn = (this.futureAge - this.earthAge) / Age.saturnYears;
    this.yearsUntilAgeUranus = (this.futureAge - this.earthAge) / Age.uranusYears;
    this.yearsUntilAgeNeptune = (this.futureAge - this.earthAge) / Age.neptuneYears;
    this.yearsUntilAgePluto = (this.futureAge - this.earthAge) / Age.plutoYears;
    return this;
  }
}