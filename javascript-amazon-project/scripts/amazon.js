import { products, loadProducts} from '../data/products.js';
import {cart, addToCart} from '../data/cart.js';
loadProducts(renderProductGrids);


function renderProductGrids() {
  let productHTML =  ``;
          products.forEach((product)=> {
          productHTML += `
              <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="${product.getStarUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count} reviews
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <!-- Additional options -->
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart" data-product-id="${product.id}">
          <img src="images/icons/checkmark.png"> Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
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
  }