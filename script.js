let inputField = document.getElementById("calc-input");
let outputField = document.getElementById("calc-output");

function appendCharacter(character) {
    inputField.value += character;
}

function calculateAns() {
    try {
        let ans = eval(inputField.value);
        outputField.innerText = ans;
        inputField.value = ans;
    } catch (e) {
        outputField.innerText = "Error";
    }
}

function deleteCharacter() {
    inputField.value = inputField.value.slice(0, -1);
}

function clearDisplay() {
    inputField.value = "";
    outputField.innerText = "0";
}

function calculateResult() {
    try {
        let result = eval(inputField.value);
        outputField.innerText = result;
        inputField.value = "";
    } catch (e) {
        outputField.innerText = "Error";
    }
}
