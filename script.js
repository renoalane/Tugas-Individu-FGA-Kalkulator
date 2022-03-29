const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

document.addEventListener('keydown', (e) => {
  var patternForNumbers = /[0-9]/g;
  var patternForOperators = /[+\-*\()/]/g;

  if(e.key === "Enter" || e.key === "="){
    e.preventDefault(); 
    if(display.innerText == ""){
      display.innerText = "Diisi dulu dong";
      setTimeout(() => (display.innerText = ""), 1000);
    }else{
      display.innerText = eval(display.innerText);
    }
  }
  if(e.key == 'Backspace'){
    var string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  }
  if(e.key == 'Delete'){
    display.innerText = '';
  }
  if(e.key.match(patternForNumbers) || e.key.match(patternForOperators)){
    e.preventDefault();
    display.innerText += e.key;
  }
})

buttons.forEach((item) => {
    item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      var string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Diisi dulu dong";
      setTimeout(() => (display.innerText = ""), 1000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const sun = document.querySelector('.sun');
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const body = document.querySelector('body');
sun.onclick = () => {
  body.classList.toggle('dark');
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
themeToggleBtn.onclick = () => {
 body.classList.toggle('dark');
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};