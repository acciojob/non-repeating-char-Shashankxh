function firstNonRepeatedChar(str) {
 // Write your code here  let charCount = {};

    // Loop through the string to count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Loop through the string again to find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];  // Return the first non-repeated character
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
