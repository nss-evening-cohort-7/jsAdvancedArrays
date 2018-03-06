## Array Challenges

### Challenge #1: Highest Scoring Word
Given a string of 2 words, find the highest scoring word.  Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation.  Display (id='challenge-1') the word that is the highest scoring.  If two words score the same, display the word that appears earliest in the original string.

```
var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp
```

### Challenge #2: Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference:  The values of the digits 3 and 7 are twisted. Our 3 means 7 and 7 means 3.

Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

```
var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
```

<hr/>

### Challenge #3: Find the unique number
Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!
```
var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55
```

<hr/>

### Challenge #4: Lost Without a Map
Given an array of any number of integers display the array with each value doubled.
```
var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
```

<hr/>

### Challenge #5: Array.diff
Given two arrays remove all values from array1 that are present in array2.  Display the final results of array1

Example 1:
```
var array1 = [1,2];
var array2 = [1];
//display = [2]
```

Example 2:
```
var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]
```

<hr/>

### Challenge #6: Number Zoo Patrol
You're working in a number zoo, and it seems that one of the numbers has gone missing!  Given an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. displaythe number that is missing.

Examples:
```
var test1 = [1,3]; // 2
var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
```

## Object Challenge

### Challenge #1: Wheel of Fortune
Three candidates take part in a TV show.  In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5).  Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.  Display the name of the winner or false if there is no winner (all scored more than 100).

Examples:
```
var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }]; // Displays "Bill"
var players = [{ name: "Bob", scores: [15, 20] }, { name: "Bill", scores: [10, 15] }, { name: "Charlie", scores: [90, 10] }]; // Displays "Charlie"
```