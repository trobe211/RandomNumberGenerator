
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Button')
    .addEventListener('click', generateNumber);
});

function generateNumber(){
    let x = document.getElementById("firstNumber");
    let y = document.getElementById("secondNumber");
    let number = document.getElementById("number");
    let randomNumber = Math.floor((Math.random() * (y.valueAsNumber - x.valueAsNumber + 1))+ x.valueAsNumber);
    number.innerHTML = randomNumber.toString();
}