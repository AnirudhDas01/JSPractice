function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined, 
        loadFromStorage: function () {
            this.cartItems = JSON.parse(localStorage.getItem(`${localStorageKey}`)); 
                if (!this.cartItems) {
                    this.cartItems = [
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
        },
     saveToStorage: function() {
        localStorage.setItem(`${localStorageKey}`, JSON.stringify(this.cartItems));
    },
     addToCart: function (productId) {
        let matchingItem = this.cartItems.find(cartItem => productId === cartItem.productId);
    
        if (matchingItem) {
            matchingItem.quantity++;
            console.log('Quantity increased by one');
            showAddedToCartSign(matchingItem.productId);
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1
            });
            console.log('New item added');
            showAddedToCartSign(productId);
        }
        this.saveToStorage();
        function showAddedToCartSign(productId) {
            const addedToCartSigns = document.querySelectorAll('.added-to-cart');
            addedToCartSigns.forEach(sign => {
                if (productId === sign.dataset.productId) {
                    sign.style.opacity = '1';
                    setTimeout(() => {
                        sign.style.opacity = '0';
                    }, 1000);
                }
            });
        }
    },
     removeFromCart: function (productId) {
        const newCart= [];
        this.cartItems.forEach((cartItem)=>{
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    },
     updateDeliveryOption: function (productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem)=> {
            if(productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId ;
        this.saveToStorage();
    }   
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);