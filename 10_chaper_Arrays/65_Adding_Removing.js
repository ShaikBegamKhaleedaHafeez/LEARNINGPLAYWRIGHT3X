let arr = [1,2,3]
//add to the end
arr.push(4);
console.log("Array after adding element: " , arr);

//remove from the end
arr.pop();
console.log("Array after removing element: " , arr);

arr.push(5,6);
console.log("Array after adding multiple elements: " , arr);
//add to the beginning
arr.unshift(0);
console.log("Array after adding element to the beginning: " , arr);
//remove from beginning
arr.shift();
console.log("Array after removing element from the beginning: " , arr);
//splice
arr.splice(2,2,12,13);
console.log("Array after.splice: " , arr);//1 2 12 13 6
