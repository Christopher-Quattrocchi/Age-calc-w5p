import Age from "../src/js/age.js";

describe("Age", () => {
  test("It should take age and set it to earth age", () => {
    let myAge = new Age(37);
    expect(myAge.earthAge).toEqual(37);
  })
})

describe("mercuryCalculator", () => {
  test("It should take an age in earth years and update your age in mercury years", () => {
    let myAge = new Age(37);
    myAge.mercuryCalculator();
    expect(myAge.mercuryAge).toEqual(154.2);
  })
})

describe("venusCalculator", () => {
  test("It should take an age in earth years and update your age in venus years", () => {
    let myAge = new Age(37);
    myAge.venusCalculator();
    expect(myAge.venusAge).toEqual(60.2);
  })
})

describe("marsCalculator", () => {
  test("It should take an age in earth years and update your age in mars years", () => {
    let myAge = new Age(37);
    myAge.marsCalculator();
    expect(myAge.marsAge).toEqual(19.7);
  })
})

describe("jupiterCalculator", () => {
  test("It should take an age in earth years and update your age in jupiter years", () => {
    let myAge = new Age(37);
    myAge.jupiterCalculator();
    expect(myAge.jupiterAge).toEqual(3.1);
  })
})

describe("saturnCalculator", () => {
  test("It should take an age in earth years and update your age in saturn years", () => {
    let myAge = new Age(37);
    myAge.saturnCalculator();
    expect(myAge.saturnAge).toEqual(1.3);
  })
})

// describe("venusCalculator", () => {
//   test("It should take an age in earth years and update your age in venus years", () => {
//     let myAge = new Age(37);
//     myAge.venusCalculator();
//     expect(myAge.venusAge).toEqual(60.2);
//   })
// })

// describe("venusCalculator", () => {
//   test("It should take an age in earth years and update your age in venus years", () => {
//     let myAge = new Age(37);
//     myAge.venusCalculator();
//     expect(myAge.venusAge).toEqual(60.2);
//   })
// })

// describe("venusCalculator", () => {
//   test("It should take an age in earth years and update your age in venus years", () => {
//     let myAge = new Age(37);
//     myAge.venusCalculator();
//     expect(myAge.venusAge).toEqual(60.2);
//   })
// })
