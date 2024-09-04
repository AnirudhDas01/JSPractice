import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import { products } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import  dayjs  from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
export  function renderOrderSummary() {
    cart.forEach((cartItem)=>{
        const productId = cartItem.productId;
        let matchingProduct;
        products.forEach((product) =>{
                if(productId === product.id){
                    matchingProduct = product;
            } 
        });
        const deliveryOptionId = cartItem.deliveryOptionId;
        let deliveryOption ; 
        deliveryOptions.forEach((option)=> {
                if (option.id === deliveryOptionId) {
                    deliveryOption = option;
                }
        });
        const today = dayjs();
        const deliveryDay = today.add(
            deliveryOption.deliveryDays, 
            'days'
        );
        const dateString = deliveryDay.format(
            'dddd, MMMM DD'
        );
        var cartSummaryHTML = `<div class="cart-item-container js-cart-items-container-${matchingProduct.id}">
                            <div class="delivery-date">
                            Delivery date: ${dateString}
                            </div>
                            <div class="cart-item-details-grid">
                            <img class="product-image"
                                src="${matchingProduct.image}">
                            <div class="cart-item-details">
                                <div class="product-name">
                                ${matchingProduct.name}
                                </div>
                                <div class="product-price">
                                $${formatCurrency(matchingProduct.priceCents)}
                                </div>
                                <div class="product-quantity">
                                <span>
                                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                                </span>
                                <span class="update-quantity-link link-primary">
                                    Update
                                </span>
                                <span class="delete-quantity-link link-primary js-delete-link" data-product-id=${matchingProduct.id}>
                                    Delete
                                </span>
                                </div>
                            </div>
                            <div class="delivery-options">
                                <div class="delivery-options-title">
                                Choose a delivery option:
                                </div>
                            ${deliveryOptionsHTML(matchingProduct.id, cartItem)}
                            </div>
                            </div>
                        </div>` 
                        var orderSummary = document.querySelector('.js-order-summary');
                        orderSummary.innerHTML += cartSummaryHTML ;
        });
            var jsCartLength = document.querySelector('.js-cart-length');
            jsCartLength.innerText = cart.length.toString() + " Items";
            function deliveryOptionsHTML(productId , cartItem) {
                let html = ''
                deliveryOptions.forEach((deliveryOption)=> {
                    const today = dayjs();
                    const deliveryDay = today.add(
                        deliveryOption.deliveryDays, 
                        'days'
                    );
                    const dateString = deliveryDay.format(
                        'dddd, MMMM DD'
                    );
                    const priceString = deliveryOption.priceCents;
                    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
                    html += `<div class="delivery-option js-delivery-option"
                    data-product-id=${productId} data-delivery-option-id=${deliveryOption.id}
                    >
                                    <input type="radio"
                                        ${isChecked? 'checked' : ''} 
                                        class="delivery-option-input"
                                        name="delivery-option-${productId}">
                                    <div>
                                        <div class="delivery-option-date">
                                            ${dateString}
                                        </div>
                                        <div class="delivery-option-price">
                                            ${formatCurrency(priceString) === '0.00' ? 'FREE' : `$${formatCurrency(priceString)}`} - Shipping
                                        </div>
                                    </div>
                                </div>
                    `;    
            });
                return html; 
            }
        document.querySelectorAll('.js-delete-link').forEach((link)=>{
            link.addEventListener('click' , ()=>{
                const productId = link.dataset.productId;
                removeFromCart(productId);
                const container = document.querySelector(
                    `.js-cart-items-container-${productId}`);
                container.remove();
                renderPaymentSummary();
            })
        });
    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
        element.addEventListener('click' , ()=>{
            var {productId ,deliveryOptionId} = element.dataset ;
            updateDeliveryOption(productId, deliveryOptionId);
            location.reload(true);
        });
    });
}
