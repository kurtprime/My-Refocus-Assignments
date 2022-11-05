function makeOrder(name, price, city, callback){
    console.log(`Hi, ${name}! Thanks for your order. The total price is ${price}.`);
    callback(name,price,city)
}

function payPrice(name,price,city){
    console.log(`${name}, we recieve your payment of ${price}. We will send your order to ${city}.`);
}
makeOrder("Kurt",100,"Lucena",payPrice)