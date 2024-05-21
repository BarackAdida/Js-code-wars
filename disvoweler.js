//This function removes all the vowels in the sentence

function disVowel (fullsentence) {
    return fullsentence.replace(/[aeiouAEIOU]/g, '');
}

let fullsentence = "Coding using Javascript is for Experts LOL!"
let disvoweled = disVowel(fullsentence)
console.log(disvoweled)