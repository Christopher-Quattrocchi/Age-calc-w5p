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

describe("mayflyAgeFinder", () => {
  test("It should tell the user how old they are in mayfly years", () => {
    let myAge = new Age(37);
    myAge.mayflyAgeFinder();
    expect(myAge.mayflyAge).toBeGreaterThan(10000);
  })
  test("It should produce the difference of mayflyAge and earthAge", () => {
    let myAge = new Age(37);
    myAge.mayflyAgeFinder();
    expect(myAge.mayflyAgeDifference).toBeGreaterThan(10000);
  })
})

describe("futureBirthday", () => {
  let myAge;

  beforeEach(() => {
    myAge = new Age(37, 40);
    myAge.futureBirthday();
  });

  test("It should return how many years until a birthday in Earth years", () => {
    expect(myAge.yearsUntilAgeEarth).toEqual(3);
  });

  test("It should return how many years until a birthday in Mercury years", () => {
    expect(myAge.yearsUntilAgeMercury).toEqual(12.45);
  });

  test("It should return how many years until a birthday in Venus years", () => {
    expect(myAge.yearsUntilAgeVenus).toEqual(4.88);
  });

  test("It should return how many years until a birthday in Mars years", () => {
    expect(myAge.yearsUntilAgeMars).toEqual(1.60);
  });

  test("It should return how many years until a birthday in Saturn years", () => {
    expect(myAge.yearsUntilAgeSaturn).toEqual(0.10);
  });

  test("It should return how many years until a birthday in Uranus years", () => {
    expect(myAge.yearsUntilAgeUranus).toEqual(0.04);
  });

  test("It should return how many years until a birthday in Neptune years", () => {
    expect(myAge.yearsUntilAgeNeptune).toEqual(0.02);
  });

  test("It should return how many years until a birthday in Pluto years", () => {
    expect(myAge.yearsUntilAgePluto).toEqual(0.01);
  });
});

describe("nextBirthday", () => {
  let myAge;

  beforeEach(() => {
    jest.useFakeTimers('modern');//mock date
  });

  afterEach(() => {
    jest.useRealTimers();//real date
  });

  describe("current date after the birthday this year", () => {
    beforeEach(() => {
      jest.setSystemTime(new Date('2023-03-01'));//mock for test
      myAge = new Age(37, 40, '1986-02-07');
      myAge.nextBirthday();
    });
    test("It should return days until Earth birthday", () => {
      expect(myAge.daysUntilBirthdayEarth).toEqual(343);
    });
    test("It should return days until Mercuy birthday", () => {
      expect(myAge.daysUntilBirthdayMercury).toEqual(83);
    });

    test("It should return days until Venus birthday", () => {
      expect(myAge.daysUntilBirthdayVenus).toEqual(211);
    });

    test("It should return days until Mars birthday", () => {
      expect(myAge.daysUntilBirthdayMars).toEqual(645);
    });

    test("It should return days until Jupiter birthday", () => {
      expect(myAge.daysUntilBirthdayJupiter).toEqual(4068);
    });

    test("It should return days until Saturn birthday", () => {
      expect(myAge.daysUntilBirthdaySaturn).toEqual(10105);
    });

    test("It should return days until Uranus birthday", () => {
      expect(myAge.daysUntilBirthdayUranus).toEqual(28812);
    });

    test("It should return days until Neptune birthday", () => {
      expect(myAge.daysUntilBirthdayNeptune).toEqual(56595);
    });

    test("It should return days until Pluto birthday", () => {
      expect(myAge.daysUntilBirthdayPluto).toEqual(85064);
    });
  });

  describe("current date is before birthday this year", () => {
    beforeEach(() => {
      jest.setSystemTime(new Date('2023-01-01'));
      myAge = new Age(37, 40, '1986-02-07');
      myAge.nextBirthday();
    });

    test("It should return days until Earth birthday", () => {
      expect(myAge.daysUntilBirthdayEarth).toEqual(37);
    });

    test("It should return days until Mercury birthday", () => {
      expect(myAge.daysUntilBirthdayMercury).toEqual(9);
    });

    test("It should return days until Venus birthday", () => {
      expect(myAge.daysUntilBirthdayVenus).toEqual(23);
    });

    test("It should return days until Mars birthday", () => {
      expect(myAge.daysUntilBirthdayMars).toEqual(70);
    });

    test("It should return days until Jupiter birthday", () => {
      expect(myAge.daysUntilBirthdayJupiter).toEqual(439);
    });

    test("It should return days until Saturn birthday", () => {
      expect(myAge.daysUntilBirthdaySaturn).toEqual(1090);
    });

    test("It should return days until Uranus birthday", () => {
      expect(myAge.daysUntilBirthdayUranus).toEqual(3108);
    });

    test("It should return days until Neptune birthday", () => {
      expect(myAge.daysUntilBirthdayNeptune).toEqual(6105);
    });

    test("It should return days until Pluto birthday", () => {
      expect(myAge.daysUntilBirthdayPluto).toEqual(9176);
    });

    describe("current date is birthday", () => {
      beforeEach(() => {
        jest.setSystemTime(new Date('2023-02-07'));
        myAge = new Age(37, 40, '1986-02-07');
        myAge.nextBirthday();
      });

      test("It should return 0 days until Earth birthday", () => {
        expect(myAge.daysUntilBirthdayEarth).toEqual(0);
      });

      test("It should return 0 days until Mercury birthday", () => {
        expect(myAge.daysUntilBirthdayMercury).toEqual(0);
      });

      test("It should return 0 days until Venus birthday", () => {
        expect(myAge.daysUntilBirthdayVenus).toEqual(0);
      });

      test("It should return 0 days until Mars birthday", () => {
        expect(myAge.daysUntilBirthdayMars).toEqual(0);
      });

      test("It should return 0 days until Jupiter birthday", () => {
        expect(myAge.daysUntilBirthdayJupiter).toEqual(0);
      });

      test("It should return 0 days until Saturn birthday", () => {
        expect(myAge.daysUntilBirthdaySaturn).toEqual(0);
      });

      test("It should return 0 days until Uranus birthday", () => {
        expect(myAge.daysUntilBirthdayUranus).toEqual(0);
      });

      test("It should return 0 days until Neptune birthday", () => {
        expect(myAge.daysUntilBirthdayNeptune).toEqual(0);
      });

      test("It should return 0 days until Pluto birthday", () => {
        expect(myAge.daysUntilBirthdayPluto).toEqual(0);
      });
    });
  });
});

