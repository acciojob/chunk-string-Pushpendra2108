function stringChop(str, size) {
  // your code here
	 let result = []; // Array to store the chunks

    for (let i = 0;  i<str.length;  i += length) {
      result.push(str.slice(i, i + length)); // Slice the string from i to i+length
    }
    return result; // Return the array of chunks
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
