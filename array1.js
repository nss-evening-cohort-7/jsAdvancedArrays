var input = prompt("Challenge One: Please enter one word followed by a space then another word");
var inputsplit = input.split(" ");
var inputsplit1 = inputsplit[0].toLowerCase();
var inputsplit2 = inputsplit[1].toLowerCase();
var ourArray = [];
for (var i = 0; i < inputsplit1.length; i++) {
    ourArray.push(inputsplit1.charCodeAt(i) - 96);
}
console.log(inputsplit1.charCodeAt(i) - 96);
var ourArray2 = [];
for (var i = 0; i < inputsplit2.length; i++) {
    ourArray2.push(inputsplit2.charCodeAt(i) - 96 * 1);
}
var ourArraysum = 0;
for (var i = 0; i < ourArray.length; i++) {
    ourArraysum += ourArray[i];
}
var ourArray2sum = 0;
for (var i = 0; i < ourArray2.length; i++) {
    ourArray2sum += ourArray2[i];
}
if (ourArraysum > ourArray2sum) {
    document
        .getElementById('challenge-1')
        .innerHTML = inputsplit1;
} else {
    document
        .getElementById('challenge-1')
        .innerHTML = inputsplit2;
}