function firstNonRepeatedChar(str) {
 // Write your code here  let charCount = {};
 let charCount = {};

    // First pass: count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Second pass: find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];  // Return the first non-repeated character
        }
    }

    return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
