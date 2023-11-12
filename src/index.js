import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Age from "./js/age.js";



document.getElementById("main-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const earthAge = parseInt(document.getElementById("age").value);
  const futureAge = parseInt(document.getElementById("future-age").value);
  const birthdate = document.getElementById("birthdate").value;
  const date = new Date(birthdate);
  console.log(date);
})


