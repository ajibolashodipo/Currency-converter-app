let sourceVal = document.getElementById("sourceVal");
let myCurrency2 = document.getElementById("my-currency-2");
let myCurrency1 = document.getElementById("my-currency-1");
let destiVal = document.getElementById("destinationVal");
let firstSubmit = document.getElementById("first-submit");
var myForm = document.getElementById("form-1");

let sV = sourceVal.value;
let dV = destiVal.value;
let mc1 = myCurrency1.value;
let mc2 = myCurrency2.value;

firstSubmit.addEventListener("click", (e) => {
  let sV = sourceVal.value;
  let dV = destiVal.value;
  let mc1 = myCurrency1.value;
  let mc2 = myCurrency2.value;

  e.preventDefault();
  console.log(dV, sV, mc1, mc2);

  fetch(`/convert?sv=${sV}&mc1=${mc1}&mc2=${mc2}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.final);
      }
    });
  });
});
