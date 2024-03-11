function reverseString(inputString) {

    let characters = inputString.split('');
  
    let start = 0;
    let end = characters.length - 1;
  
    while (start < end) {
        [characters[start], characters[end]] = [characters[end], characters[start]];
        start++;
        end--;
    }

    let reversedString = characters.join('');
  
    return reversedString;
}

const myString = "Hello, world!";
const reversedString = reverseString(myString);
//console.log(`Original string: ${myString}`);
console.log(`Reversed string: ${reversedString}`);
