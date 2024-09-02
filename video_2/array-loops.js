// const myArray = [1,2,3,4,5,6];
// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// myArray[0] = 99;
// console.log(myArray);
// console.log(typeof myArray);
// console.log(Array.isArray([1,2]));

// let i = 0 ;

// while(i<10) {
//     console.log(i + " Hello World");
//     i++;
// }

// array1 = [1,2,3,4];
// array2 = array1.slice();

// array2.push(5);
// console.log(array1);
// console.log(array2);

// const [firstValue , secondValue] = array2;

// for (let i = 0; i <=10; i++) {
//         if (i%3===0) {
//             continue;
//             }
//             else if(i === 8)
//     {
//         break;
//     }
// }


// let i = 1 ;
// while(i<=10) {
//     if (i%3===0) {
//         continue;
//     }
//     else if(i===8) {
// break;
//     }
//     i++;
// }
// function doubleArray(nums){
//     const doubledNums = [];
//     for (let i = 0; i<= nums.length; i++) {
//         doubledNums.push(nums[i]*2);
//     }
// return doubledNums;
// }

// console.log(doubleArray([23,2,1]));

// var newArray = [{class: 12, name: 'Mikki'},
//                 {class: 12, name: 'chikki'},
//                 {class: 12, name: 'Anirudh'},
//                 {class: 12, name:'Ashmit'},
//                 {class: 12, name: 'yuvraj'},];
// newArray.forEach(function(value ,index){
//     console.log(value.name);
// });

// const arrowFunc = (params, params2) =>{
//     console.log('This is the first params '+params);
//     console.log('This is the second params '+params2);
// }
// arrowFunc('Anirudh Das', 24);\
// var newArray = [-292961,148412,260098,-437189,-358147,294321,-320530,188425]
// var array = newArray.filter((value)=>{
// return value >=0
// });
// console.log(array);

var maps = [1,2,3].map((value,index)=>{
    return value * 2; // multiplies array value and returns the double
});
var maps = [1,2,3].map(value=>value * 2);
console.log(maps);  // same as above but compact 