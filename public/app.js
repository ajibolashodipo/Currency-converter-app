let sourceVal = document.getElementById("sourceVal");
let myCurrency2 = document.getElementById("my-currency-2");
let myCurrency1 = document.getElementById("my-currency-1");
let sourceVal = document.getElementById("destinationVal");
let firstSubmit = document.getElementById("first-submit");

let sV = sourceVal.value;
let mc1 = myCurrency1.value;
let mc2 = myCurrency2.value;

firstSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(sV, mc1, mc2);
});
