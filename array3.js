// Challenge 3 
var challengeThreeInputA = [ 1, 1, 7, 1, 1, 1, 1 ]
var unique = function uniq(arr1) {
  return arr1.filter(function(elem, index, self) {
    console.log(self.indexOf(elem) == self.lastIndexOf(elem));
    return self.indexOf(elem)==self.lastIndexOf(elem);
  });
}
var aNotherDivElement = document.getElementById('challenge-3');
aNotherDivElement.innerHTML = "<h4>" + unique(challengeThreeInputA) + "</h4>";