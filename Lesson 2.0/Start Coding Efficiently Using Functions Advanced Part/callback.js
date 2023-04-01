function discount(percentage,amount){
    let discounted_amount =  amount - (amount * (percentage / 100))
    return discounted_amount
}

function age_checker(age){
    if (age >= 10) {
        return true
    } else {
        return false
    }
}
function calculate(customer_group = {},discount_func){
    const group_count = customer_group.length;  
    const all_aged_10_and_above = customer_group.every(age_checker);
    var sub_total = 299 * group_count;
    var discount = 0;
    var grand_total = null;
    if(group_count < 6){
    return `Sorry, No Discount. Bill:${sub_total}`
    }
    if (all_aged_10_and_above){
        discount = 15;
        grand_total = discount_func(discount,sub_total)
    }else{
        discount = 10;
        grand_total = discount_func(discount, sub_total)
    }
    return `${discount}% discount. Bill: ${grand_total}`
}

var customer_group1 = [8,12,,11,18,24,5,10];
var customer_group2 = [10,11,11,13,19,14];
var customer_group3 = [12,12,14]
console.log(calculate(customer_group1,discount))
console.log(calculate(customer_group2,discount))
console.log(calculate(customer_group3,discount))