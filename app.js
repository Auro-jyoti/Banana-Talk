//document is an API u use it to talk to the browser.
var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
// console.log(txtInput);
var outputDiv = document.querySelector('#output');

// outputDiv.innerText = "Auro Jyoti";
console.log(outputDiv);


// console.log(btnTranslate);
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     // console.log("clicked");
//     // console.log("input", txtInput.value);
// })
// when a function is inside an object it is called method.
// a function which goes as an input is called as the callback function.
// why callback , cz it is called from inside.

// var atrbtSelect = document.querySelector('input[name = translator]')

function clickHandler() {
    outputDiv.innerText = 'a;skdjfpi ' + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);