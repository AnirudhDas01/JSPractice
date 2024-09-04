import { formatCurrency } from '../scripts/utils/money.js';

console.log("test Suite: Format Currency")
console.log('Converts cents to dollars')

if (formatCurrency(2095)=== '20.95') {
    console.log('Passed');
}
else {
    console.log('Failed');
} // test case: 1

console.log('formats 0 value')

if (formatCurrency(0)=== '0.00') {
    console.log('Passed');
}
else {
    console.log('Failed');
}

console.log('rounds and converts decimal value')

 // test case: 2
if (formatCurrency(2000.5)=== '20.01') {
    console.log('Passed');
}
else {
    console.log('Failed');
} // test case: 3
