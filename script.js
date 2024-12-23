function stringChop(str, size) {
  let result = []; // Array to store the chunks

  for (let i = 0;  i < str.length;  i += size) {
    result.push(str.slice(i, i + size)); // Slice the string from i to i+size
  }
  
  return result; // Return the array of chunks
} 

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
