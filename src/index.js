import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./js/age.js";

// window.Age = Age;  //Uncomment me to test in devtools console.

document.getElementById("main-form").addEventListener("submit", function(event) {//This does way too much
  event.preventDefault();

  const earthAge = parseInt(document.getElementById("age").value);
  const futureAge = parseInt(document.getElementById("future-age").value);
  const birthdate = document.getElementById("birthdate").value;
  const date = new Date(birthdate);
  let myAge = new Age(earthAge, futureAge, date)//fluent chaining
    .mercuryCalculator()
    .venusCalculator()
    .marsCalculator()
    .jupiterCalculator()
    .saturnCalculator()
    .uranusCalculator()
    .neptuneCalculator()
    .uranusCalculator()
    .plutoCalculator()
    .mayflyAgeFinder()
    .futureBirthday()
    .nextBirthday();

  const mercuryAge = document.getElementById("mercury-age");//probably should've used a loop or an array or something 
  const venusAge = document.getElementById("venus-age");
  const marsAge = document.getElementById("mars-age");
  const jupiterAge = document.getElementById("jupiter-age");
  const saturnAge = document.getElementById("saturn-age");
  const uranusAge = document.getElementById("uranus-age");
  const neptuneAge = document.getElementById("neptune-age");
  const plutoAge = document.getElementById("pluto-age");
  const mayflyAge = document.getElementById("mayfly-age");
  const mayflyAgeDifference = document.getElementById("mayfly-difference");

  const earthFuture = document.getElementById("earth-future");
  const mercuryFuture = document.getElementById("mercury-future");
  const venusFuture = document.getElementById("venus-future");
  const marsFuture = document.getElementById("mars-future");
  const jupiterFuture = document.getElementById("jupiter-future");
  const saturnFuture = document.getElementById("saturn-future");
  const uranusFuture = document.getElementById("uranus-future");
  const neptuneFuture = document.getElementById("neptune-future");
  const plutoFuture = document.getElementById("pluto-future");

  const earthNext = document.getElementById("earth-next");
  const mercuryNext = document.getElementById("mercury-next");
  const venusNext = document.getElementById("venus-next");
  const marsNext = document.getElementById("mars-next");
  const jupiterNext = document.getElementById("jupiter-next");
  const saturnNext = document.getElementById("saturn-next");
  const uranusNext = document.getElementById("uranus-next");
  const neptuneNext = document.getElementById("neptune-next");
  const plutoNext = document.getElementById("pluto-next");

  mercuryAge.innerText = `On Mercury, you are ${myAge.mercuryAge} years old`;
  venusAge.innerText = `On Venus, you are ${myAge.venusAge} years old`;
  marsAge.innerText = `On Mars, you are ${myAge.marsAge} years old`;
  jupiterAge.innerText = `On Jupiter, you are ${myAge.jupiterAge} years old`;
  saturnAge.innerText = `On Saturn, you are ${myAge.saturnAge} years old`;
  uranusAge.innerText = `On Uranus, you are ${myAge.uranusAge} years old`;
  neptuneAge.innerText = `On Neptune, you are ${myAge.neptuneAge} years old`;
  plutoAge.innerText = `On Pluto, you are ${myAge.plutoAge} years old`;
  mayflyAge.innerText = `You are ${myAge.mayflyAge} years old in mayfly years.`;
  mayflyAgeDifference.innerText = `You are this much older in mayfly years: ${myAge.mayflyAgeDifference}.`;

  earthFuture.innerText = `You will be ${myAge.futureAge} on Earth in ${myAge.yearsUntilAgeEarth} years`;
  mercuryFuture.innerText = `You will be ${myAge.futureAge} on Mercury in ${myAge.yearsUntilAgeMercury} years`;
  venusFuture.innerText = `You will be ${myAge.futureAge} on Venus in ${myAge.yearsUntilAgeVenus} years`;
  marsFuture.innerText = `You will be ${myAge.futureAge} on Mars in ${myAge.yearsUntilAgeMars} years`;
  jupiterFuture.innerText = `You will be ${myAge.futureAge} on Jupiter in ${myAge.yearsUntilAgeJupiter} years`;
  saturnFuture.innerText = `You will be ${myAge.futureAge} on Saturn in ${myAge.yearsUntilAgeSaturn} years`;
  uranusFuture.innerText = `You will be ${myAge.futureAge} on Uranus in ${myAge.yearsUntilAgeUranus} years`;
  neptuneFuture.innerText = `You will be ${myAge.futureAge} on Neptune in ${myAge.yearsUntilAgeNeptune} years`;
  plutoFuture.innerText = `You will be ${myAge.futureAge} on Pluto in ${myAge.yearsUntilAgePluto} years`;

  earthNext.innerText = `Your next birthday on Earth will be in ${myAge.daysUntilBirthdayEarth} days`;
  mercuryNext.innerText = `Your next birthday on Mercury will be in ${myAge.daysUntilBirthdayMercury} days`;
  venusNext.innerText = `Your next birthday on Venus will be in ${myAge.daysUntilBirthdayVenus} days`;
  marsNext.innerText = `Your next birthday on Mars will be in ${myAge.daysUntilBirthdayMars} days`;
  jupiterNext.innerText = `Your next birthday on Jupiter will be in ${myAge.daysUntilBirthdayJupiter} days`;
  saturnNext.innerText = `Your next birthday on Saturn will be in ${myAge.daysUntilBirthdaySaturn} days`;
  uranusNext.innerText = `Your next birthday on Uranus will be in ${myAge.daysUntilBirthdayUranus} days`;
  neptuneNext.innerText = `Your next birthday on Neptune will be in ${myAge.daysUntilBirthdayNeptune} days`;
  plutoNext.innerText = `Your next birthday on Pluto will be in ${myAge.daysUntilBirthdayPluto} days`;
});

