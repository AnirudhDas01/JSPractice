import {products} from '../data/products.js';
import {cart, addToCart} from '../data/cart.js';
import { formatCurrency } from './utils/money.js';
let productHTML =  ``;

products.forEach((product)=> {
        productHTML += `
            <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product['image']}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product['name']}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating['stars']*10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating['count']}
                </div>
            </div>

            <div class="product-price">
                $ deleteItem(matchingProduct.id);${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart" data-product-id="${product.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>`;

});
    let productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = productHTML;
// product listing ends

//this function updates the cart div add a number by one when someone click on add to cart button 
        function updateCartQuantity() {
            let totalQuantity = 0;
            cart.forEach((cartItem)=>
                {
                    totalQuantity+= cartItem.quantity;
                });
            var cartQuantity = document.querySelector('.cart-quantity');
            if (cartQuantity){
                cartQuantity.innerText = totalQuantity.toString();
            }
        } 
    document.addEventListener('DOMContentLoaded', ()=>{
        document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
            button.addEventListener('click',() =>{
                const productId = button.dataset.productId;
                    addToCart(productId);
                    updateCartQuantity();
            });
        });
    });

    //this function checks if any item is present in cart if not adds it and if present only increases the quantity by one.


   //this function toggles a green sign signifying that the item is added to the cart UI/UX function
