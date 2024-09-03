export function formatCurrency (amount) {
    return (amount/100).toFixed(2);
}

console.log(formatCurrency(1220));