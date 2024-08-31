var basketball = { 
    name: 'Spalding', 
    price: 2095, 
}
console.log(basketball.name);
console.log(basketball['price']);

//increase price by 500 cents 

basketball.price+= 500

console.log(basketball);

//a new property delivery time 

basketball['delivey-time'] = '3 days';
console.log(basketball);

// function 

function comparePrice (product1 ,product2) {
    if (product1.price <= product2.price) {
        console.log (product1.price);
    }
    else {
        console.log(product2.price);
    }
}

product1 = {
    name: 'SS',
    price: 12999
}
product2 = {
    name: 'SG', 
    price: 14999
}


comparePrice(product1 ,product2);

