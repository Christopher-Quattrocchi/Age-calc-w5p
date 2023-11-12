import Age from "../src/js/age.js";

describe("Age", () => {
  test("It should take age and set it to earth age", () => {
    let myAge = new Age(37);
    expect(myAge.earthAge).toEqual(37);
  });
});

describe("mercuryCalculator", () => {
  test("It should take an age in earth years and update your age in mercury years", () => {
    let myAge = new Age(37);
    myAge.mercuryCalculator();
    expect(myAge.mercuryAge).toEqual(153.53);
  });
});

describe("venusCalculator", () => {
  test("It should take an age in earth years and update your age in venus years", () => {
    let myAge = new Age(37);
    myAge.venusCalculator();
    expect(myAge.venusAge).toEqual(60.16);
  });
});

describe("marsCalculator", () => {
  test("It should take an age in earth years and update your age in mars years", () => {
    let myAge = new Age(37);
    myAge.marsCalculator();
    expect(myAge.marsAge).toEqual(19.68);
  });
});

describe("jupiterCalculator", () => {
  test("It should take an age in earth years and update your age in jupiter years", () => {
    let myAge = new Age(37);
    myAge.jupiterCalculator();
    expect(myAge.jupiterAge).toEqual(3.12);
  });
});

describe("saturnCalculator", () => {
  test("It should take an age in earth years and update your age in saturn years", () => {
    let myAge = new Age(37);
    myAge.saturnCalculator();
    expect(myAge.saturnAge).toEqual(1.26);
  });
});

describe("uranusCalculator", () => {
  test("It should take an age in earth years and update your age in uranus years", () => {
    let myAge = new Age(37);
    myAge.uranusCalculator();
    expect(myAge.uranusAge).toEqual(0.44);
  });
});

describe("neptuneCalculator", () => {
  test("It should take an age in earth years and update your age in neptune years", () => {
    let myAge = new Age(37);
    myAge.neptuneCalculator();
    expect(myAge.neptuneAge).toEqual(0.22);
  });
});

describe("plutoCalculator", () => {
  test("It should take an age in earth years and update your age in pluto years", () => {
    let myAge = new Age(37);
    myAge.plutoCalculator();
    expect(myAge.plutoAge).toEqual(0.15);
  });
});

describe("futureBirthday", () => {
  test("It should return how many years until a birthday in earth years, and for each planet", () => {
    let myAge = new Age(37, 40);
    myAge.futureBirthday();
    expect(myAge.yearsUntilAgeEarth).toEqual(3);
    expect(myAge.yearsUntilAgeMercury).toEqual(12.45);
    expect(myAge.yearsUntilAgeVenus).toEqual(4.88);
    expect(myAge.yearsUntilAgeMars).toEqual(1.60);
    expect(myAge.yearsUntilAgeSaturn).toEqual(0.10);
    expect(myAge.yearsUntilAgeUranus).toEqual(0.04);
    expect(myAge.yearsUntilAgeNeptune).toEqual(0.02);
    expect(myAge.yearsUntilAgePluto).toEqual(0.01);
  });
});

describe("nextBirthday", () => {
  const originalDate = Date.now.bind(global.Date);
  const testDate = (year, month, day) => {
    global.Date.now = () => new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0)).getTime();
  };

  afterEach(() => {
    global.Date.now = originalDate;
  });

  test("current date after the birthday this year", () => {
    testDate(2023, 3, 1);
    let myAge = new Age(37, 40, '1986-02-07');
    myAge.nextBirthday();
    expect(myAge.daysUntilBirthdayEarth).toBeGreaterThan(0);
  });

  test("current date is before birthday this year", () => {
    testDate(2023, 1, 1);
    let myAge = new Age(37, 40, '1986-02-07');
    myAge.nextBirthday();
    expect(myAge.daysUntilBirthdayEarth).toBeLessThan(37);
  });

  test("current date is birthday", () => {
    testDate(2023, 2, 7);
    let myAge = new Age(37, 40, '1986-02-07');
    myAge.nextBirthday();
    expect(myAge.daysUntilBirthdayEarth).toEqual(0);
  });
});

