import { cart } from '../../data/cart.js';
import { products } from '../../data/products.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';


export function renderPaymentSummary () {
    var totalPrice =  0;
    var totalDeliveryOptionCost = 0;
    var totalBeforeTaxes = 0 ;
    var orderTotal = 0 ;
    var paymentSummary = document.querySelector('.js-payment-summary');
    var paymentSummaryHTML = ``;
    var estimatedTaxes = 0;
    cart.forEach((cartItem)=> {
        products.forEach((product)=>{
            if (cartItem.productId == product.id) {
                totalPrice += cartItem.quantity * (product.priceCents/100)
            }
        });
        deliveryOptions.forEach((deliveryOption) => {
            if(cartItem.deliveryOptionId === deliveryOption.id) {
                totalDeliveryOptionCost+= (deliveryOption.priceCents/100);
            }
        })
    })
    totalBeforeTaxes = totalPrice + totalDeliveryOptionCost;
    orderTotal = (totalBeforeTaxes * 110) / 100 ;
    estimatedTaxes = (totalBeforeTaxes / 10) 
    // console.log("total Price "+ (totalPrice).toFixed(2));
    // console.log("total Delivery Cost "+(totalDeliveryOptionCost).toFixed(2));
    // console.log("total before taxes "+ (totalBeforeTaxes).toFixed(2));
    // console.log('order Total '+ (orderTotal).toFixed(2))
    paymentSummaryHTML = `<div class="payment-summary-title">
                    Order Summary
                </div>

                <div class="payment-summary-row">
                    <div>Items (${cart.length}):</div>
                    <div class="payment-summary-money">$${(totalPrice).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">$${(totalDeliveryOptionCost).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">$${(totalBeforeTaxes).toFixed(2)}4</div>
                </div>

                <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">${(estimatedTaxes).toFixed(2)}</div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">$${(orderTotal).toFixed(2)}</div>
                </div>

                <button class="place-order-button button-primary">
                    Place your order
                </button>`
                paymentSummary.innerHTML =paymentSummaryHTML
}