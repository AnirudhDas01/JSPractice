export let cart;

loadFromStorage();


export function loadFromStorage () {
    cart = JSON.parse(localStorage.getItem('cart')); 
        if (!cart) {
            cart = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 1,
                    deliveryOptionId: '1'
                },
                {
                    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
                    quantity: 2,
                    deliveryOptionId: '2'
                }
            ];
        }
} 



function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) 
{
let matchingItem;
    cart.forEach((cartItem)=> {
            if(productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.quantity++;
            addedToCartSign(matchingItem.productId);
        }
        else {
            cart.push({
                productId: productId,
                quantity: 1
            })
            addedToCartSign(productId);
        }
        saveToStorage();
        function addedToCartSign(productId){
            var addedToCartSign = document.querySelectorAll('.added-to-cart');
            for (let index = 0; index < addedToCartSign.length; index++) {
                if (productId === addedToCartSign[index].dataset.productId){
                    addedToCartSign[index].style.opacity = '1';
                    setTimeout(()=>{
                        addedToCartSign[index].style.opacity = '0';
                    },1000);
                }
            }
        }
}



export function removeFromCart (productId) {
    const newCart= [];
    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption (productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem)=> {
        if(productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId ;
    saveToStorage();
}