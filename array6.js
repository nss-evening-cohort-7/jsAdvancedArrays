var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
var test4 = [1,2,3,4]; // 5

function mathStuffs(testArray){
    var correctArrayLength = (testArray.length) + 1;
    var correctSum = (correctArrayLength * (correctArrayLength + 1)) / 2;
   
    var testArraySum = 0;
    for(var i = 0; i < testArray.length; i++){
        testArraySum += testArray[i];
    }

    var missingNumber = correctSum - testArraySum;
    var printDiv = document.getElementById('challenge-6');
    printDiv.innerHTML += "<h1>The missing number is: " + missingNumber + "</h1>"
}

mathStuffs(test1);
mathStuffs(test2);
mathStuffs(test3);
mathStuffs(test4);