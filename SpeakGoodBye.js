// SpeakGoodBye.js

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
    var byeSpeaker = {}; // STEP 7: Create an object called 'byeSpeaker'

    var speakWord = "Good Bye"; // DO NOT attach the speakWord variable to the 'byeSpeaker' object.

    // STEP 8: Rewrite the 'speak' function such that it is attached to the byeSpeaker object
    // See Lecture 52, part 2
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

    // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it 'byeSpeaker' on the global scope as well.
    window.byeSpeaker = byeSpeaker;

})(window);
