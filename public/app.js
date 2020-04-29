let sourceVal = document.getElementById("sourceVal");
let myCurrency2 = document.getElementById("my-currency-2");
let myCurrency1 = document.getElementById("my-currency-1");
let destiVal = document.getElementById("destinationVal");
let firstSubmit = document.getElementById("first-submit");
var myForm = document.getElementById("form-1");

sourceVal.addEventListener("keypress", (e) => {
  destiVal.value = "";
});

firstSubmit.addEventListener("click", (e) => {
  //shows loading on the screen while http request is being made
  destiVal.value = "Loading...";
  let sV = sourceVal.value;
  let dV = destiVal.value;
  let mc1 = myCurrency1.value;
  let mc2 = myCurrency2.value;

  e.preventDefault();

  fetch(`/convert?sv=${sV}&mc1=${mc1}&mc2=${mc2}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        destiVal.value = data.final;
      }
    });
  });
});
