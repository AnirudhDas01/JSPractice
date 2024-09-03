export const cart = [];


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
}

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