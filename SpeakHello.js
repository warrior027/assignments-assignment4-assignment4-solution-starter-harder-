// SpeakHello.js

// STEP 6: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
    var helloSpeaker = {}; // STEP 7: Create an object called 'helloSpeaker'

    var speakWord = "Hello"; // DO NOT attach the speakWord variable to the 'helloSpeaker' object.

    // STEP 8: Rewrite the 'speak' function such that it is attached to the helloSpeaker object
    // See Lecture 52, part 2
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // STEP 9: Expose the 'helloSpeaker' object to the global scope. Name it 'helloSpeaker' on the global scope as well.
    window.helloSpeaker = helloSpeaker;

})(window);