function writeToDom(input, id){
    document.getElementById(id).innerHTML += input;
}
// CHALLENGE #1, ARRAYS with forEach

function challenge1(input){
    var words = input.toLowerCase().split(' ');
    var best = findBestWord(words);
    writeToDom(best.word, "challenge-1b");
}

function findBestWord(words){
    var bestWord = { score: 0 };
    words.forEach(function(word){
        var score = 0;
        word.split().forEach(function(char){
            var letterCode = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
            // score += (letterCode >= 1 || letterCode <= 26) ? letterCode : 0;
            if (letterCode >= 1 || letterCode <= 26){
                score += letterCode
            } else {
                score += 0
            }
        });
        if (score > bestWord.score){
            bestWord.score = score;
            bestWord.word = word;
        }
    });
    return bestWord;
}

challenge1("jumbo shrimp");

// CHALLENGE #3 with sort

function challenge3(input){
    var unique = findUnique(input);
    writeToDom(unique, "challenge-3b")
}

function findUnique(array){
    array.sort(function(a, b){
        return a - b;
    });
    if (array[0] === array[1]){
        return array.pop();
    } else {
        return array[0];
    }
}

var input3b = [ 1, 1, 7, 1, 1, 1, 1 ];
challenge3(input3b);

// CHALLENGE #4 with map

function challenge4(input){
    var doubled = double(input);
    writeToDom(doubled, "challenge-4b");
}

function double(nums){
    var answer = nums.map(doubleAction);
    return answer;
}

function doubleAction(item){
    return item * 2;
}

challenge4([ 3, 8, 1, 2, 4, 12 ]);

// CHALLENGE #5 with filter

function challenge5(array1, array2){
    var answer = filterArrays(array1, array2);
    writeToDom(answer, "challenge-5b");
}

function filterArrays(one, two){
    return one.filter(function(num){
        return !two.includes(num);
    });
}

challenge5([1, 2, 4, 7, 5, 9], [5, 9, 2])

// CHALLENGE #6 with includes

function challenge6(input){
    var missing = findMissing(input);
    writeToDom(missing, "challenge-6b");
}

function findMissing(nums){
    for (var i = 1; i < nums.length + 1; i++){
        if(!nums.includes(i)){
            return i;
        }
    }
}

var input6b = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12
challenge6(input6b);

// OBJECT CHALLENGE #1 with reduce

function challenge1_obj(players){
    findTotals(players);
    var winner = findWinner(players);
    writeToDom(winner.name, "challenge-obj-1b");
}

function findTotals(players){
    players.forEach(function(player){
        player.total = player.scores.reduce(function(prev, curr){
            return prev + curr;
        })
    })
}

function findWinner(players){
    var winner = { total: 0 };
    players.forEach(function(player){
        if (player.total <= 100 && player.total > winner.total){
            winner = player;
        }
    })
    return winner;
}


var players = [
    {
        name: "Bob",
        scores: [10, 65]
    }, {
        name: "Bill",
        scores: [90, 5]
    }, {
        name: "Charlie",
        scores: [40, 55]
    }, {
        name: "Rick Sanchez",
        scores: [99, 0]
    }
];
challenge1_obj(players);