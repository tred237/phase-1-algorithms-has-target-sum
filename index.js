function hasTargetSum(array, target) {
  // 1
  const targetObj = {};

  // 0(n)
  for(element of array){
    // 0(1)
    if(targetObj[target - element] !== undefined){
      return true;
    } else {
      targetObj[element] = true;
    }
  }

  return false;
}

// console.log(hasTargetSum([2, 2, 3, 3], 4));

/* 
  Time Complexity -> 0(n)
  Space Complexity -> 0(3n) -> 0(n)
*/

/* 
  create object to store array elements

  loop through array and check to see if the difference between the target and the array element already exists in the object
  if true, return true
  else, add the array element to the object

  return false if nothing returns true
*/

/*
  I chose to add the array elements to an object b/c selecting elements from an object are immediate and take little time to process.
  Taking the differnence from each object key and the target sum would allow me to search the object for any elements that equal that difference

  This did not work b/c there can be arrays where there are mulitple elements with the same number
  I then moved if statement to check the objec in the for of loop b/c that would take care of the case where there are arrays wuith multiple elements of the same number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 5, 7, 11], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
}

module.exports = hasTargetSum;
