var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

function doubleNum(dubnum) {
    var doubled = [];
    for (var k = 0; k < dubnum.length; k++) {
        doubled.push(dubnum[k] * 2);
    }
    return doubled;
}

var doubledArray = doubleNum(challengeFourInputB);
document.getElementById('challenge-4').innerHTML = "<h3> Challenge 4: " + doubledArray + "</h3>";