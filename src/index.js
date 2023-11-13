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

  const mercuryFuture = document.getElementById("mercury-future");
  const venusFuture = document.getElementById("venus-future");
  const marsFuture = document.getElementById("mars-future");
  const jupiterFuture = document.getElementById("jupiter-future");
  const saturnFuture = document.getElementById("saturn-future");
  const uranusFuture = document.getElementById("uranus-future");
  const neptuneFuture = document.getElementById("neptune-future");
  const plutoFuture = document.getElementById("pluto-future");

  const mercuryNext = document.getElementById("mercury-next");
  const venusNext = document.getElementById("venus-next");
  const marsNext = document.getElementById("mars-next");
  const jupiterNext = document.getElementById("jupiter-next");
  const saturnNext = document.getElementById("saturn-next");
  const uranusNext = document.getElementById("uranus-next");
  const neptuneNext = document.getElementById("neptune-next");
  const plutoNext = document.getElementById("pluto-next");

  mercuryAge.innerText = `On mercury, you are ${myAge.mercuryAge} years old`;
  venusAge.innerText = `On venus, you are ${myAge.venusAge} years old`;
  marsAge.innerText = `On mars, you are ${myAge.marsAge} years old`;
  jupiterAge.innerText = `On jupiter, you are ${myAge.jupiterAge} years old`;
  saturnAge.innerText = `On saturn, you are ${myAge.saturnAge} years old`;
  uranusAge.innerText = `On uranus, you are ${myAge.uranusAge} years old`;
  neptuneAge.innerText = `On neptune, you are ${myAge.neptuneAge} years old`;
  plutoAge.innerText = `On pluto, you are ${myAge.plutoAge} years old`;

  mercuryFuture.innerText = `You will be ${myAge.futureAge} on mercury in ${myAge.yearsUntilAgeMercury} years`;
  venusFuture.innerText = `You will be ${myAge.futureAge} on venus in ${myAge.yearsUntilAgeVenus} years`;
  marsFuture.innerText = `You will be ${myAge.futureAge} on mars in ${myAge.yearsUntilAgeMars} years`;
  jupiterFuture.innerText = `You will be ${myAge.futureAge} on jupiter in ${myAge.yearsUntilAgeJupiter} years`;
  saturnFuture.innerText = `You will be ${myAge.futureAge} on saturn in ${myAge.yearsUntilAgeSaturn} years`;
  uranusFuture.innerText = `You will be ${myAge.futureAge} on uranus in ${myAge.yearsUntilAgeUranus} years`;
  neptuneFuture.innerText = `You will be ${myAge.futureAge} on neptune in ${myAge.yearsUntilAgeNeptune} years`;
  plutoFuture.innerText = `You will be ${myAge.futureAge} on pluto in ${myAge.yearsUntilAgePluto} years`;

  mercuryNext.innerText = `Your next birthday on mercury will be in ${myAge.daysUntilBirthdayMercury} days`;
  venusNext.innerText = `Your next birthday on venus will be in ${myAge.daysUntilBirthdayVenus} days`;
  marsNext.innerText = `Your next birthday on mars will be in ${myAge.daysUntilBirthdayMars} days`;
  jupiterNext.innerText = `Your next birthday on jupiter will be in ${myAge.daysUntilBirthdayJupiter} days`;
  saturnNext.innerText = `Your next birthday on saturn will be in ${myAge.daysUntilBirthdaySaturn} days`;
  uranusNext.innerText = `Your next birthday on uranus will be in ${myAge.daysUntilBirthdayUranus} days`;
  neptuneNext.innerText = `Your next birthday on neptune will be in ${myAge.daysUntilBirthdayNeptune} days`;
  plutoNext.innerText = `Your next birthday on pluto will be in ${myAge.daysUntilBirthdayPluto} days`;
});

