let customer = {
    customer_name : "Johnny Manggo",
    points : 12300,
    cart : [
        {
            item :  "Shampoo",
            quantity : 2,
            price_$ : 3
        },
        {
            item :  "Soap",
            quantity : 2,
            price_$ : 2
        },
        {
            item :  "Toothpase",
            quantity : 1,
            price_$ : 3
        }
    ]
}

let total_bill = 0;
let extra_points = 0;
console.log(`Hi ${customer.customer_name} We are happy to see you today.
Your current points are: ${customer.points}`)
for (let i = 0; i < customer.cart.length; i++) {
    let price = customer.cart[i].quantity * customer.cart[i].price_$;
    let cart2 = customer.cart[i];
    total_bill = price + total_bill;
    extra_points = extra_points + customer.cart[i].quantity
    console.log(`${cart2.quantity}x ${cart2.item}---$${price}`)
}
customer.points = extra_points + customer.points
console.log("Total Bill: "+total_bill)
console.log("New Current Points: "+customer.points)
