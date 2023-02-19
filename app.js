//document is an API u use it to talk to the browser.
var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
console.log(txtInput);

// console.log(btnTranslate);
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
})