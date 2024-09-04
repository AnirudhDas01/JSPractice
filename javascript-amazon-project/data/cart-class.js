class Cart {
        cartItems; 
        #localStorageKey;// Initialize cartItems as an empty array

        constructor(localStorageKey) {
            this.#localStorageKey = localStorageKey;
            this.#loadFromStorage();
        }

        #loadFromStorage() {
        const storedItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (storedItems) {
            this.cartItems = storedItems;
        } else {
            // Fallback default cart items
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
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        let matchingItem = this.cartItems.find(cartItem => productId === cartItem.productId);

        if (matchingItem) {
            matchingItem.quantity++;
            console.log('Quantity increased by one');
            this.showAddedToCartSign(matchingItem.productId);
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1
            });
            console.log('New item added');
            this.showAddedToCartSign(productId);
        }
        this.saveToStorage();
    }

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem = this.cartItems.find(cartItem => productId === cartItem.productId);
        if (matchingItem) {
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    }

    showAddedToCartSign(productId) {
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
}
const cart = new Cart('cart-oop');
const businessCart = new Cart('business-cart');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);