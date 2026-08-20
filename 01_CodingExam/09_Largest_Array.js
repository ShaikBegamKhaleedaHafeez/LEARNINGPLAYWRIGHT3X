function findLargest(arr) {
  let largest = arr[0]; 
  for (let num of arr) {
    if (num > largest) {
      largest = num; 
    }
  }
  console.log("Largest number is:", largest);
}

findLargest([10, 25, 3, 99, 42]);