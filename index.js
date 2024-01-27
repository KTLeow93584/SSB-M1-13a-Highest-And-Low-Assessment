/// =====================================
// Variable Sample Declarations
const example1 = [ 1, 2,  3, 4,  5 ];
const example2 = " 1, 2, -3, 4,  5 ";
const example3 = "1 9 3 4 -5";
const example4 = { 
  1: 1,
  2: 9,
  3: 3,
  4: 4,
  5: -5
};
const example5 = 1354-5;
// =====================================
function highAndLow(numbers) {
  const varType = typeof(numbers);
  let numberArray = null;
  let result = {
    "highest": -Infinity,
    "lowest": Infinity
  };
  // =====================================
  // 1. Check for input format type. (Supported Types: String, Number, Array)
  if (varType === "string") {
    // 1a) For string, check if it's separated by comma.
    if (numbers.includes(","))
      numberArray = numbers.trim().split(",");
    // 1b) Otherwise, assume all white-spaced input.
    else
      numberArray = numbers.split(" ");
    // 1c) Does not cover edge cases, such as having other symbols in the input. (!@#$%^&*))
  }
  // 2. Array or Object format input type.
  else {
    // 2a) Number Format = Immediately assign and exit because other steps below would be redundant.
    if (varType === "number") {
      result.highest = numbers;
      result.lowest = numbers;
      
      return result;
    }
    // 2b) Others (E.g. Object)
    else {
      // Debug
     // console.log("Input type: " + varType + ", Is Array: " + Array.isArray(numbers));
      
      // Only Accept Array, Objects not supported.
      if (Array.isArray(numbers)) {
        numberArray = numbers;
      }
      else {
        console.log(`Input [${JSON.stringify(numbers)}] format is currently not supported. Type: ${varType}.`);
        return null;
      }
    }
  }
  // =====================================
  // 3. Ensure the array we transfer the input from is an array type to do valid calculations
  if (numberArray !== null && Array.isArray(numberArray)) {
    // 3a) More than 1 element = Loop and compare using minmax
    if (numberArray.length > 1) {
      numberArray.forEach((number) => {
        result.highest = Math.max(result.highest, number);
        result.lowest = Math.min(result.lowest, number);
      });
    }
    else {
      // 3b) Just 1 element in the array = Assign both as is.
      if (numberArray.length > 0) {
        result.highest = numberArray[0];
        result.lowest = numberArray[0];
      }
    }
    // 3c) Invalid formats -> Do Nothing.
  }
  // =====================================
  // 4. Return the object variable, "result" containing out "highest" and "lowest" key-values.
  return result;
}
// =====================================
function displayResult(numberObj) {
  return `Highest: ${numberObj.highest}, Lowest: ${numberObj.lowest}`;
}
// =====================================
let result = highAndLow(example1);
if (result !== null)
  console.log(`Result 1 [${example1}]: ${displayResult(result)}.`);
console.log("------");
// ===================
result = highAndLow(example2);
if (result !== null)
  console.log(`Result 2 [${example2}]: ${displayResult(result)}.`);
console.log("------");
// ===================
result = highAndLow(example3);
if (result !== null)
  console.log(`Result 3 [${example3}]: ${displayResult(result)}.`);
console.log("------");
// ===================
result = highAndLow(example4);
if (result !== null)
  console.log(`Result 4 [${example4}]: ${displayResult(result)}.`);
console.log("------");
// ===================
result = highAndLow(example5);
if (result !== null)
  console.log(`Result 5 [${example5}]: ${displayResult(result)}.`);
console.log("------");
// =====================================