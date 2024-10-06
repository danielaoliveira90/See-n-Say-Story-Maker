// Arrays for the sentence
const button1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const button2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const button3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const button4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const button5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Function to get a random item from an array
function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    console.log(item);
    console.log(randomIndex);
    return array[randomIndex];
}

// Function to combine all random items into a full phrase
function getFullPhrase() {
    return getRandom(button1) + ' ' + getRandom(button2) + ' ' + getRandom(button3) + ' ' + getRandom(button4) + ' ' + getRandom(button5);
}

// Set the initial textToSpeak value as the full random phrase
var textToSpeak = getFullPhrase();

// Select the "Speak the value of var textToSpeak" button
var speakButton = document.querySelector('button');

// Function to speak a given string
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Event listener for the "Speak the value of var textToSpeak" button
speakButton.onclick = function() {
    textToSpeak = getFullPhrase(); // Get a new random phrase
    speakNow(textToSpeak);
};

// Variables to track the index of each array
let button1Index = 0;
let button2Index = 0;
let button3Index = 0;
let button4Index = 0;
let button5Index = 0;

// Event listeners for individual buttons to speak items in order

// Button 1 - Noun
document.getElementById('1').onclick = function() {
    speakNow(button1[button1Index]);  // Speak item from button1 array
    button1Index = (button1Index + 1) % button1.length;  // Move to the next item, looping back to the start
    console.log(button1Index);
};

// Button 2 - Verb
document.getElementById('2').onclick = function() {
    speakNow(button2[button2Index]);  // Speak item from button2 array
    button2Index = (button2Index + 1) % button2.length;  // Move to the next item, looping back to the start
    console.log(button2Index);

};

// Button 3 - Adjective
document.getElementById('3').onclick = function() {
    speakNow(button3[button3Index]);  // Speak item from button3 array
    button3Index = (button3Index + 1) % button3.length;  // Move to the next item, looping back to the start
    console.log(button3Index);

};

// Button 4 - Noun
document.getElementById('4').onclick = function() {
    speakNow(button4[button4Index]);  // Speak item from button4 array
    button4Index = (button4Index + 1) % button4.length;  // Move to the next item, looping back to the start
    console.log(button4Index);

};

// Button 5 - Place
document.getElementById('5').onclick = function() {
    speakNow(button5[button5Index]);  // Speak item from button5 array
    button5Index = (button5Index + 1) % button5.length;  // Move to the next item, looping back to the start
    console.log(button5Index);

};
