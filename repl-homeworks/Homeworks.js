//Booleans and Comparison
var cakes = 5;
var slicesPerCake = 6;
var attendees = 60;
var bakers = 3;
var cakeBakingTime = 1;
var hoursLeftUntilParty = 5;

//Add comparison operators below:
var enoughSlicesNow;
var slicesNeeded;
var cakesWeCanBake;
var finalSliceCount;
var extraSlices;
//Problem 1: (Bool) Checking if there are enough slices to begin with
check = cakes * slicesPerCake;
if (check < attendees) {
    enoughSlicesNow = false;
}
//Problem 2: Figure out how many slices are still needed for the party
slicesNeeded = attendees - check;
//Problem 3: Calculating how many more cakes can be baked before the party
cakesWeCanBake = (bakers * cakeBakingTime) * hoursLeftUntilParty;
//Problem 4: (Bool) Making sure there are now enough slices. Comparing finalSliceCount to # of attendees
finalSliceCount = (cakes + cakesWeCanBake) * slicesPerCake;
if (finalSliceCount > attendees) {
    extraSlices = true;
}

//Conditionals
var cakes = 5;
var slicesPerCake = 6;
var attendees = prompt("How many attendees?");
var bakers = 3;
var cakeBakingTime = 1;
var hoursLeftUntilParty = 5;

//Add comparison operators below:
var enoughSlicesNow = true;
var slicesNeeded;
var cakesWeCanBake;
var finalSliceCount;
var extraSlices;
//Problem 1: (Bool) Checking if there are enough slices to begin with
start = cakes * slicesPerCake;
if (start < attendees) {
    enoughSlicesNow = false;
}
//Problem 2: Figure out how many slices are still needed for the party
slicesNeeded = attendees - start;
//Problem 3: Calculating how many more cakes can be baked before the party
cakesWeCanBake = (bakers * cakeBakingTime) * hoursLeftUntilParty;
//Problem 4: (Bool) Making sure there are now enough slices. Comparing finalSliceCount to # of attendees
finalSliceCount = (cakes + cakesWeCanBake) * slicesPerCake;
if (finalSliceCount > attendees) {
    extraSlices = true;
}

//New Section
//Checking if there are now enough cakes for the party, if not, console "We need more cakes!"
if (!enoughSlicesNow) {
    console.log("We need more cakes!");
    //Find out how many more slices are needed
    short = attendees - start;
    console.log("We'll need " + short + " more slices.")
        //Testing if we can bake enough cakes in time
    if (finalSliceCount > attendees) {
        //4th Item: if we can, say so with how many extra slices
        extra = finalSliceCount - attendees;
        console.log("We can bake enough cakes, and we'll have " + extra + " extra slices");
    } else if (finalSliceCount == attendees) {
        //5th Item: If we have just enough
        console.log("We can bake enough cakes and we won't have any extra slices");
    } else {
        //6th Item: if we won't have enough slices
        console.log("We can\'t make enough cake in time for the party!");
    }
}

//While Loops
var input = 5;
var exp = input;
var digitCount = 5;
var inputLength = input.toString().length
while (inputLength < digitCount) {
    //Original: input * input, but input keeps being changed
    //So 5 * 5 = 25, but then next loop is 25 * 25. Need to keep one the same as original
    input = input * exp
    inputLength = input.toString().length
    console.log(input)
}

var result = input; //store the final number in this variable.

//For loops
var givenNumber = prompt("What number shall we loop until?");
prime = " "


if (givenNumber > 0) {
    //For loop to go through all numbers previous to the givenNumber
    for (i = 0; i <= givenNumber; i++) {
        result = "odd";
        //Dividing by the number in iteration i if the number is even:
        if ((i % 2) === 0) {
            result = "even";
        }
        //Check to see if result is prime
        //If the number is 0 and 1, skip
        if (i < 2) {
            prime = " "
        } else {
            prime = "- prime"
                //Testing all numbers 2 and up. The second the number is divisible, say not prime
                //and BREAK! so fewer wasted processes
            for (j = 2; j < i; j++) {
                //If divisible by anything other than 1 and itself
                if (i % j === 0) {
                    //Not prime
                    prime = " "
                    break;
                }
            }
        }
        output = result + " " + prime
        console.log(i, output)
    }
}

//Strings are like arrays
var letters = "This is an example of a sentence.";

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var phone = "555-555-1234";

//Joining an array of strings into a single string
sentence = ["This", "is", "a", "real", "sentence"];
console.log(sentence.join("-"));

//Slicing the alphabet, then rejoining
//Array spaced out for readability
s = [
    alphabet.slice(0, 4),
    alphabet.slice(8, 12),
    alphabet.slice(16, 20),
    alphabet.slice(24, 26), //Comma even at the end, because still new line
]
console.log(s.join(""))

//only slicing the first 4 of the alphabet
console.log(alphabet.slice(0, 4))

//Changing phone number spaces from "-" to "."
p = phone.split("-")
console.log(p.join("."))

//Changing phone number to have area code in (), space, then number seperated by "-"
number = [(p[1]), (p[2])]
area = "(" + p[0] + ")"
console.log(area, number.join(" - "))

//Array Creation & Access
//Adding 4 common household pets
var pets = ["dolphins", "zebras", "emus", "raiders fans"];
//Pushing "crocodiles" to 5th index
pets.push("crocodiles")
    //Pushing another common household pet
pets.push("children")

//Initalizing chores to be an Array
var chores = [];
//Pushing 3 values to the array
chores.push("Clean Dishes", "Pick up room", "Fighting Dragons")
    //Popping the last value in the array, but assigning it to something so it is saved
x = chores.pop()
    //"Finished X", where X is the last array index 'popped' in the chores array
console.log("finished ", x)

var alphabet = "abcdefghijklmnopqrstuvwxyz";
//Turning 'alphabet' into an array
alphabet = alphabet.split("")
    //Only printing out vowels, and "and ometimes" in between 'u' and 'y'
    //Save space: turing '+ " " +' into s
s = " "
vowels = [
    alphabet[0],
    alphabet[4],
    alphabet[8],
    alphabet[14],
    alphabet[20],
    " and sometimes ",
    alphabet[24],
]
console.log(vowels.join(" "))
    //splicing out the vowels from the rest of the alphabet
alphabet = [
        alphabet.slice(1, 4),
        alphabet.slice(5, 8),
        alphabet.slice(9, 14),
        alphabet.slice(15, 20),
        alphabet.slice(21, 24),
        alphabet.slice(25)
    ]
    //turning back into a string, so that each character is spaced evenly with ','
alphabet = alphabet.join(',')
    //Turning back into an array
alphabet = alphabet.split(",")

console.log(alphabet)

var mealLog = [];
//Creating an array for each day of the week
sunday = [];
monday = [];
tuesday = [];
wednesday = [];
thursday = [];
friday = [];
saturday = [];
//pushing the day arrays into the mealLog
mealLog.push(sunday, monday, tuesday, wednesday, thursday, friday, saturday)
console.log("Pushed empty days: ", mealLog)
    //Adding 'Oatmeal' to first position of each array
for (i = 0; i < mealLog.length; i++) {
    mealLog[i].push("Oatmeal")
}
console.log(mealLog)
    //Adding 'Sandwich' to each even numbered array, in second position
for (i = 1; i < mealLog.length; i += 2) {
    mealLog[i].push("Soup")
}
console.log(mealLog)
    //Add 'Soup' to each odd day, in second position
for (i = 0; i < mealLog.length; i += 2) {
    mealLog[i].push("Sandwich")
}
console.log(mealLog)
    //Adding 'Ramen' to every day ending in y; all of them
for (i = 0; i < mealLog.length; i++) {
    mealLog[i].push("Ramen")
}
console.log(mealLog)
    //Creating a new array with names of the days of the week
dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    //Joining the Days array with the mealLog array
fullList = [
    ('"' + dayNames[0] + ': ' + mealLog[0].join(" ") + '"'),
    ('"' + dayNames[1] + ': ' + mealLog[1].join(" ") + '"'),
    ('"' + dayNames[2] + ': ' + mealLog[2].join(" ") + '"'),
    ('"' + dayNames[3] + ': ' + mealLog[3].join(" ") + '"'),
    ('"' + dayNames[4] + ': ' + mealLog[4].join(" ") + '"'),
    ('"' + dayNames[5] + ': ' + mealLog[5].join(" ") + '"'),
    ('"' + dayNames[6] + ': ' + mealLog[6].join(" ") + '"')
]
console.log(fullList)

// //Changing phone number to have area code in (), space, then number seperated by "-"
// number = [(p[1]), (p[2])]
// area = "(" + p[0] + ")"
// console.log(area, number.join(" - "))


//Arrays and Loops
var suits = ["Hearts", "Diamonds", "Spades", "Clovers"];
var faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "Kings", "Joker"]
var a = " of "
var deck = [];
var temp = null;

//Looping through arrays, combining faces to each suit
//Faces is length-1 to not insert all jokers
for (i = 0; i < suits.length; i++) {
    for (j = 0; j < faces.length - 1; j++) {
        //Looping through each of the suits
        deck.push(faces[j] + a + suits[i])
    }
}
//Inserting 1 joker to the deck
deck.push(faces[13])
console.log(deck)

//Shuffle the deck, using Fisher-Yates shuffle
//Researched from Frank Mitchell: https://www.frankmitchell.org/2015/01/fisher-yates/

for (k = deck.length - 1; k > 0; k -= 1) {
    m = Math.floor(Math.random() * (k + 1))
    temp = deck[k]
    deck[k] = deck[m]
    deck[m] = temp
}

console.log("^^^^^^^^^^^^^^^^^^^^^")
console.log("---Shuffling Deck----")
console.log("vvvvvvvvvvvvvvvvvvvvv")
console.log(deck)

//Checking to make sure shuffled so no three cards of the same suit in a row.

//loop for each suit type (running this search loop four times), 
// then using indexOf(suits[i]), 
// but then how do I compare that to deck[i + 1] and [i + 2]? 
// How do I create the comparison of the suit that I'm looking for, 
// and the suit in the deck?

//Creating Objects
//Turning computer into object. Setting values
var computer = {
    processor: "Intel",
    RAM: "16 GB",
    "Screen Size": "15in"
}

//Setting travelPlans as an Array
var travelPlans = [];
//Creating three objects, with properties (city, country, region, packing list)
var miami = {
    city: "Miami",
    country: "United States",
    region: "North America",
    "packing list": [
        "Shorts",
        "Toothbrush",
        "Sunscreen"
    ]
}

var laguna = {
    city: "Laguna Beach",
    country: "United States",
    region: "North America",
    "packing list": [
        "Bathing Suit",
        "Sandals",
        "Sunglasses"
    ]
}

var europe = {
        city: "Dublin",
        country: "Ireland",
        region: "Europe",
        "packing list": [
            "Suitcase",
            "Passport",
            "Fun"
        ]
    }
    //Pushing information
travelPlans.push(miami, laguna, europe)

//Check travelPlans
console.log(travelPlans)

var languages = [];
//Adding languages directly into the array
languages = [
    { Name: "English", Fluency: "good", "Spoken Since Age": 2 },
    { Name: "Bad English", Fluency: "better", "Spoken Since Age": 1 }
]

//Check languages
console.log(languages)

//Easy Object Access
var library = {
    city: "San Francisco",
    name: "SF Public",
    bestBook: {
        title: "JavaScript for Dummies",
        company: {
            name: "BookCo",
            employees: {
                writers: [{
                    firstName: "Bob",
                    lastName: "Marley",
                }],
                publisher: {
                    firstName: "Fred",
                    lastName: "Bambam"
                }
            }
        }
    }
}

console.log(library.city)
console.log(library.name)
console.log(library.bestBook.title)
console.log(library.bestBook.company.name)
console.log(
    library.bestBook.company.employees.publisher.firstName,
    " ",
    library.bestBook.company.employees.publisher.lastName
)

//Object Access
//Turning computer into object. Setting values
//Just needs to be an object, not an array
//Objects work in the format: key : variable
var computer = {
    processor: "Intel",
    RAM: "16 GB",
    "Screen Size": "15in"
}

//Setting travelPlans as an Array
var travelPlans = [];
//Creating three objects, with properties (city, country, region, packing list)
var miami = {
    city: "Miami",
    country: "United States",
    region: "North America",
    "packing list": [
        "Shorts",
        "Toothbrush",
        "Sunscreen"
    ]
}

var laguna = {
    city: "Laguna Beach",
    country: "United States",
    region: "North America",
    "packing list": [
        "Bathing Suit",
        "Sandals",
        "Sunglasses"
    ]
}

var europe = {
        city: "Dublin",
        country: "Ireland",
        region: "Europe",
        "packing list": [
            "Suitcase",
            "Passport",
            "Fun"
        ]
    }
    //Pushing information
travelPlans.push(miami, laguna, europe)

//Check travelPlans
//console.log(travelPlans)

var languages = [];
//Adding languages directly into the array
languages = [
    { name: "English", fluency: "good", "Spoken Since Age": 2 },
    { name: "Bad English", fluency: "better", "Spoken Since Age": 1 }
]

//Check languages
//console.log(languages)

//A for..in loop  for(var key in object){}
console.log("I have a computer, and it has the following properties:")
for (var i in computer) {
    console.log(i, " : ", computer[i])
}

//Loop for computer object message
// for (i = 0; i < computer.length; i++) {
//   console.log("I have a computer, and it has the following properties:")
//   console.log("processor: ", computer[i].processor)
//   console.log("RAM: ", computer[i].RAM)
//   console.log("Screen Size: ", computer[i]["Screen Size"])
// }

//Mark section
console.log("-------")

//Loop for travelPlans
console.log("I plan to travel the world!")
for (j = 0; j < travelPlans.length; j++) {
    properList = null
    if (properList === null) {
        properList = "First,"
    } else if (properList === "First,") {
        properList = "Next"
    }
    console.log(properList, "I am going to", travelPlans[j].region)
    console.log("There I'll visit", travelPlans[j].country)
    console.log("I'm going to stop in", travelPlans[j].city, "so I'll need to bring:")
        //What if I had a different size array? How do I loop these into the same line?
    console.log(
        travelPlans[j]["packing list"][0],
        ",",
        travelPlans[j]["packing list"][1],
        ",",
        "and",
        travelPlans[j]["packing list"][2]
    )

    console.log("---")
}

//Loop for languages
console.log("I speak several languages:")
for (k = 0; k < languages.length; k++) {
    console.log(
        "I speak",
        languages[k].name,
        languages[k].fluency,
        "and I have spoken it since age",
        languages[k]["Spoken Since Age"]
    )
}

//First Functions
function evenOrOdd(num) {
    if ((num % 2) === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenOrOdd(3); //odd
evenOrOdd(5); //odd 
evenOrOdd(8); //even

// divisibleByThree function here
function divisibleByThree(n) {
    if ((n % 3) === 0) {
        console.log("true")
    } else {
        console.log("false")
    }
}

divisibleByThree(6); //true
divisibleByThree(10); //false
divisibleByThree(13); //false
divisibleByThree(18); //true

// longerThanFive function here
function longerThanFive(s) {
    if (s.length > 5) {
        console.log("true")
    } else {
        console.log("false")
    }
}

longerThanFive("abbracadbra") //true
longerThanFive("alakazam") //true
longerThanFive("beep") //false

// isPhone function here
function isPhone(st) {
    checkValue = st.split("")
        //Check on checkValue array of the string to be checked
        //console.log(checkValue)
        //Looping through new array, checking each character if number
    numOfInts = 0
    for (i = 0; i < checkValue.length; i++) {
        check = parseInt(checkValue[i])
        if (!isNaN(check)) {
            numOfInts++
        }
    }
    //Check number of Integers
    //console.log("Number of Integers: ", numOfInts)
    if (numOfInts === 10) {
        console.log("true")
    } else {
        console.log("false")
    }
    // numbers = parseInt(st);
    // if (numbers.length === 10) {
    //   console.log("true");
    // } else {
    //   console.log("false");
    // }
}

isPhone("555.333.1234") //true
isPhone("(555) 333-1234") //true
isPhone("27 cats is a great number of cats") //false
isPhone("25 is 5 times 5") //false 

//Functions with return values
function sum(num1, num2) {
    return num1 + num2;
}

//Check sum()
sum(4, 5)

function isEqual(n1, n2) {
    if (n1 === n2) {
        return true
    } else {
        return false
    }
}

//Check isEqual
isEqual(4, 5)

function discountPercentage(n, p) {
    //console.log("n:", n, "p:", p)
    //temp = n * (p / 100)
    //console.log("temp:", temp)
    return n * (p / 100)
}

//Check discountPercentage()
discountPercentage(200, 20)


//Using example:  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     

function stringCapitalize(s) {
    var splitString = s.toLowerCase().split(' ')
    for (i = 0; i < splitString.length; i++) {
        //console.log("Capitalizing!!!")
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
    }
    f = splitString.join(' ');
    if (f === "About Javascript") {
        return "About JavaScript"
    } else {
        return f
    }
}

//Check stringCapitalize()
stringCapitalize('this string needs capitalization')

function isDivisible(n3, n4) {
    if ((n3 % n4) === 0) {
        return true
    } else {
        return false
    }
}

//check isDivisible()
isDivisible(8, 5)

//Combining Functions
var cakes = 5;
var slicesPerCake = 6;
var attendees = 85;
var bakers = 3;
var cakeBakingTime = 1;
var hoursLeftUntilParty = 5;

//Add conditionals below:
var cakesWeCanBake = (bakers * cakeBakingTime) * hoursLeftUntilParty;
var finalSliceCount = (cakesWeCanBake + cakes) * slicesPerCake;
var extraSlices = finalSliceCount > attendees;

cakesToBake(attendees, cakes)
leftoverSlices(attendees, cakes)
canProvideCake(attendees, bakers, hoursLeftUntilParty)

function cakesToBake(attendees, cakes) {
    var enoughSlicesNow = false
    if (attendees <= (cakes * slicesPerCake)) {
        enoughSlicesNow = true
        return 0
    }
    if (!enoughSlicesNow) {
        slicesNeeded = attendees - (cakes * slicesPerCake);
        console.log("slicesNeeded: ", slicesNeeded)
        cakesNeeded = Math.ceil(slicesNeeded / slicesPerCake);
        console.log("Extra Cakes Needed: ", cakesNeeded)
        return cakesNeeded
    }
}

function leftoverSlices(attendees, cakes) {
    totalSlices = (cakesToBake(attendees, cakes) + cakes) * slicesPerCake
    console.log("Total Slices Made: ", totalSlices)
    console.log("Total Attendees: ", attendees)
    if ((totalSlices - attendees) >= 0) {
        leftovers = totalSlices - attendees
        console.log("Leftover Slices: ", leftovers)
        return leftovers
    } else {
        return -1
    }
}

function canProvideCake(attendees, bakers, hoursLeftUntilParty) {
    needToBake = cakesToBake(attendees, cakes)
    ableToMake = hoursLeftUntilParty * bakers
    if (needToBake >= ableToMake) {
        return false
    } else {
        return true
    }

}

//Old code from past project:
//Do we have enough cakes?
// if (!enoughSlicesNow) {
//     console.log("We need more cakes!")
//     console.log("We'll need " + slicesNeeded + " more slices.")
//     // Can we bake enough cakes to have extra slices?
//     if (finalSliceCount > attendees) {
//         console.log("We can bake enough cakes, and we'll have " + (finalSliceCount - attendees) + " extra slices")
//     // Can we bake enough cakes to have exactly the right amount?
//     } else if(finalSliceCount == attendees) {
//         console.log("We can bake enough cakes and we won't have any extra slices.");
//     // Otherwise we know we won't have enough slices
//     } else {
//         console.log("We can't make enough cake in time for the party!")
//     }
// }

//Functions with Arrays
// For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
    result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

//sum() tests
a = [1, 2, 3, 4];
m = sum(a);
b = [];
n = sum(b);
console.log("a: ", m, ", b: ", n);

// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(inputArray) {
    multiply = 1;
    for (j = 0; j < inputArray.length; j++) {
        multiply *= inputArray[j];
    }
    return multiply;
}

//product() tests
c = [1, 2, 3, 4];
p = product(c);
d = [];
q = product(d);
console.log("c: ", p, ", d: ", q);

// For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
function concatenate(inputArray) {
    inputArray = inputArray.join("");
    return inputArray;
}

//concatenate() tests
e = ["hello", "my", "name", "is", "ken"];
r = concatenate(e);
f = [];
s = concatenate(f);
console.log("e: ", r, ", f: ", s);

//filterPassingGrades
// given [88, 67, 70, 92, 53], then return [88, 70, 92].
function filterPassingGrades(inputArray) {
    passingGrades = [];
    for (k = 0; k < inputArray.length; k++) {
        if (inputArray[i] >= 70) {
            passingGrades.push(inputArray[k]);
        }
    }
    return passingGrades;
}

//filterPassingGrades() tests
g = [88, 67, 70, 92, 53];
t = filterPassingGrades(g);
h = [30, 40, 66];
u = filterPassingGrades(h);
console.log("g: ", t, ", h: ", u);

//replace
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(inputArray, numFind, numReplace) {
    for (l = 0; l < inputArray.length; l++) {
        if (inputArray[l] === numFind) {
            inputArray[l] = numReplace;
        }
    }
    return inputArray;
}

//replace() tests
testAa = [1, 3, 2, 1, 3];
testAb = 1;
testAc = 4;
outA = replace(testAa, testAb, testAc);
console.log("testA : ", outA);

//flatten
// For example, given [[1], [2, 3], [4]], return [1, 2, 3, 4].
function flatten(inputArray) {
    outputArray = [];
    //Solution 1:
    //outputArray = [].concat.apply([], inputArray);
    //Solution 2:
    // outputArray = inputArray.reduce(function(prev, curr) {
    //   return prev.concat(curr);
    // });
    //Solution 3:
    for (var x = 0; x < inputArray.length; ++x) {
        for (var y = 0; y < inputArray[x].length; ++y) {
            //If there more dimensions to this, another loop for each, and .push(array[1][2][3][n..])
            outputArray.push(inputArray[x][y]);
        }
    }
    //Solution using 'spread' in ES6:
    //outputArray = [].concat(...inputArray);
    return outputArray;
}

//flatten() tests:
testBa = [
    [1],
    [2, 3],
    [4]
];
outBa = flatten(testBa);
testBb = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9]
];
outBb = flatten(testBb);
console.log("testBa: ", outBa, ", testBb: ", outBb);

//mow
// Replace the numbers bigger than the max in the array. For example, given [6, 12, 11, 13, 5, 8] and 10
// then return the same array with [6, 10, 10, 10, 5, 8].
function mow(inputArray, max) {
    for (z = 0; z < inputArray.length; z++) {
        if (inputArray[z] > max) {
            inputArray[z] = max;
        }
    }
    return inputArray;
}

//mow() tests
testCa = [6, 12, 11, 13, 5, 8];
testCb = 10;
outC = mow(testCa, testCb);
console.log("testC: ", outC);