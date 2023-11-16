export default class Age {
  static mercuryYears = 0.241;
  static venusYears = 0.615;
  static marsYears = 1.88;
  static jupiterYears = 11.86;
  static saturnYears = 29.46;
  static uranusYears = 84;
  static neptuneYears = 165;
  static plutoYears = 248;
  static mayflyLifespanInYears = 0.00000951;

  constructor(earthAge, futureAge, birthdate) {
    //Earth age, future age, birthdate
    this.earthAge = earthAge;
    this.futureAge = futureAge;
    this.birthdate = new Date(birthdate);
    //age on each planet
    this.mercuryAge = null;
    this.venusAge = null;
    this.marsAge = null;
    this.jupiterAge = null;
    this.saturnAge = null;
    this.uranusAge = null;
    this.neptuneAge = null;
    this.plutoAge = null;
    this.mayflyAge = null;
    this.mayflyAgeDifference = null;
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
    //Days until birthday on each planet
    this.daysUntilBirthdayEarth = null;
    this.daysUntilBirthdayMercury = null;
    this.daysUntilBirthdayVenus = null;
    this.daysUntilBirthdayMars = null;
    this.daysUntilBirthdayJupiter = null;
    this.daysUntilBirthdaySaturn = null;
    this.daysUntilBirthdayUranus = null;
    this.daysUntilBirthdayNeptune = null;
    this.daysUntilBirthdayPluto = null;
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

  mayflyAgeFinder() {
    this.mayflyAge = parseFloat((this.earthAge * (80 / Age.mayflyLifespanInYears)).toFixed(2));
    this.mayflyAgeDifference = parseFloat(this.mayflyAge - this.earthAge).toFixed(2);
    return this;
  }

  futureBirthday() {
    this.yearsUntilAgeEarth = parseFloat((this.futureAge - this.earthAge).toFixed(2));
    this.yearsUntilAgeMercury = parseFloat(((this.futureAge - this.earthAge) / Age.mercuryYears).toFixed(2));
    this.yearsUntilAgeVenus = parseFloat(((this.futureAge - this.earthAge) / Age.venusYears).toFixed(2));
    this.yearsUntilAgeMars = parseFloat(((this.futureAge - this.earthAge) / Age.marsYears).toFixed(2));
    this.yearsUntilAgeJupiter = parseFloat(((this.futureAge - this.earthAge) / Age.jupiterYears).toFixed(2));
    this.yearsUntilAgeSaturn = parseFloat(((this.futureAge - this.earthAge) / Age.saturnYears).toFixed(2));
    this.yearsUntilAgeUranus = parseFloat(((this.futureAge - this.earthAge) / Age.uranusYears).toFixed(2));
    this.yearsUntilAgeNeptune = parseFloat(((this.futureAge - this.earthAge) / Age.neptuneYears).toFixed(2));
    this.yearsUntilAgePluto = parseFloat(((this.futureAge - this.earthAge) / Age.plutoYears).toFixed(2));
    return this;
  }

  nextBirthday() {
    let birthDay = this.birthdate.getUTCDate();
    let birthMonth = this.birthdate.getUTCMonth();
    let currentYear = new Date().getUTCFullYear();

    let nextBirthday = new Date(Date.UTC(currentYear, birthMonth, birthDay));
    nextBirthday.setUTCHours(0, 0, 0, 0);

    let currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);

    if (currentDate > nextBirthday) {
      nextBirthday.setUTCFullYear(currentYear + 1);
    }

    const difference = nextBirthday.getTime() - currentDate.getTime();
    this.daysUntilBirthdayEarth = Math.round(difference / (1000 * 60 * 60 * 24));
    this.daysUntilBirthdayMercury = Math.round(this.daysUntilBirthdayEarth * Age.mercuryYears);
    this.daysUntilBirthdayVenus = Math.round(this.daysUntilBirthdayEarth * Age.venusYears);
    this.daysUntilBirthdayMars = Math.round(this.daysUntilBirthdayEarth * Age.marsYears);
    this.daysUntilBirthdayJupiter = Math.round(this.daysUntilBirthdayEarth * Age.jupiterYears);
    this.daysUntilBirthdaySaturn = Math.round(this.daysUntilBirthdayEarth * Age.saturnYears);
    this.daysUntilBirthdayUranus = Math.round(this.daysUntilBirthdayEarth * Age.uranusYears);
    this.daysUntilBirthdayNeptune = Math.round(this.daysUntilBirthdayEarth * Age.neptuneYears);
    this.daysUntilBirthdayPluto = Math.round(this.daysUntilBirthdayEarth * Age.plutoYears);
    return this;
  }
}