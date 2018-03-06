// CHALLENGE #5

// var array1 = [1,2];
// var array2 = [1];  //display = [2]
var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];  //display = [1, 4, 7]
for (var i = 0; i < array1.length; i++) {
  for (var j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      array1.splice(i, 1);
    }
  }
}
document.getElementById("challenge-5").innerHTML = "<h3>Challenge Five:</h3>" + "<p>" + array1 + "</p>";