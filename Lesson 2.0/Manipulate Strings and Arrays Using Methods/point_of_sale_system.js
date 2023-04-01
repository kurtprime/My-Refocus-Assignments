const store_inventory = [
    {
        item: "Shampoo",
        quantity: 1,
        price_$: 3
    },
    {
        item: "soap",
        quantity: 0,
        price_$: 2
    },
    {
        item: "toothpaste",
        quantity: 2,
        price_$: 3
    },
] 

const new_deliveries = [
    {
        item:"Shampoo",
        quantity: 5,
        price_$: 4,
        inventory_index:0 
    },
    {
        item:"soap",
        quantity:10,
        price_$:2,
        inventory_index:1
    },
    {
        item:"toothpaste",
        quantity:10,
        price_$:3,
        inventory_index:2
    }
]

function processDeliveries(items_obj){
    store_inventory[items_obj.inventory_index].quantity += items_obj.quantity;
    store_inventory[items_obj.inventory_index].price_$ = items_obj.price_$;
}
// store_inventory.forEach((element, index)=>{
//     processDeliveries(new_deliveries[index])
//   //  if(store_inventory.length -1 == index){
//        // console.log("Delivered items have been added to the inventory.")
//        // console.log("New inventory summary:")
//        // console.log(store_inventory)
//   // }
// })

new_deliveries.forEach(processDeliveries)

function productSummary(items_obj){
    const item_id = items_obj.item.toLowerCase().slice(0,3);
    var remarks = "good";
    if (items_obj.quantity < 10) {
        remarks = "item stock is low.";
    }
    var message = `itemID:${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks: `;
    let new_message = message.concat(remarks)
    return new_message
}
const report_summary = store_inventory.map(productSummary)
console.log(report_summary)