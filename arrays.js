//excersise 1
console.log("hey")

// exercise 2
var test1 = "Cat"; //false
var test2 = "racecar"; //true
var test3 = "bear"; //false
var test4 = "mom"; //true
 
 
var test1 = "cat";
var opp = test1.split("").reverse().join("");
if (test === opp){
    console.log("same? ", true);
} else{
    console.log("same? ", false);
}

var animals = ["fish", "dog", "cat"];
var animalzElement = document.getElementById('animalz');
for(var i=0; i<animals.length; i++){
    // console.log("animal", animals[i]) //console
animalzElement.innerHTML += animals[i]; // DOM
}


// var book3 = "Fahrenheit 451";
// var removeLetters = book3.replace(/\D/,'');
// console.log(removeLetters);

//challenge 2

var book = "catch 22"
var bookSplit = book.split("");
var realNumz = [];
for(var j =0; j<bookSplit.length; j++){
    if((bookSplit[j]*1){
        realNumz.push(bookSplit[j]);
    }
}
console.log("answer", realNumz.join(""));
