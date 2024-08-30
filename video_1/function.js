
function calculateDeliveryCost (totalPrice){
        var deliveryCost;
        if (totalPrice <= 200) {
           return  deliveryCost = 50;
        }
        else 
        if(totalPrice > 200 && totalPrice <= 600) {
            return deliveryCost = 30 ;
        }
        else if (totalPrice > 600 && totalPrice <= 900) {
            return deliveryCost = 10;
        }
        else {
            return deliveryCost = 0;
            
        }
    }

    console.log("total delivery cost is:  " + calculateDeliveryCost(11200));
