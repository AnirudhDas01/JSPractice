// loop counts by 2 till 10 

// for (let i = 0 ; i <= 10 ; i+=2) {
//     console.log(i);
// }

// reverse for loop 5 - 0 

// for (let i = 5 ; i>=0 ; i--) {
//     console.log(i);
// } 

// above exercise using while loop 


// let i = 0 ;
// while( i <=10) {
//     console.log(i);
//     i+=2;
// }

// let j = 5 ;
// while (j>=0) {
//     console.log(j);
//     --j;

// }

//a loop which takes an array and increases it by  a  number

// var myArray1 = [1,2,3];
// var myArray2 = [];
// for(let i = 0 ; i< myArray1.length ; i++) {
//     var updatedVal = myArray1[i]+1;
//     myArray2.push(updatedVal);
// }
// console.log(myArray2);

// array takes a number and returns with one number increased

// var addOne = [-2,-1,0,99];
// for(let i = 0 ; i< addOne.length ; i++) {

//     addOne[i] = addOne[i] + 1;
// }
// console.log(addOne);

// a function which takes array and number and returns the array increased by number 

// function addNum(elem, num) {
// for(let i = 0 ; i< elem.length ; i++) {

//     elem[i] = elem[i] + num;
// }
// return elem;
// }

// var ans = addNum ([1,2,3] , 2);
// console.log(ans);

// function takes two array and adds them 

// function addArray (arr1 , arr2) {
//     var arr3 = [] ;
//     for (let i = 0 ; i< arr1.length ; i++) {
//         arr3.push(arr1[i]+arr2[i])
//     }
//     return arr3;
// }

// console.log(addArray([1,1,2], [1,1,3]));

// find min and max in an array

function minMax(arr) {
    // Check if the array is not empty
    if (arr.length === 0) return 'Array is empty';

    let min = arr[0]; // Initialize min with the first element
    let max = arr[0]; // Initialize max with the first element

    for (let i = 1; i < arr.length; i++) { // Start loop from second element
        let num = arr[i];
        if (num < min) {
            min = num; // Update min if current number is smaller
        } else if (num > max) {
            max = num; // Update max if current number is larger
        }
    }

    return 'min: ' + min.toString() + ' max: ' + max.toString();
}

console.log(minMax([5,2,3]))