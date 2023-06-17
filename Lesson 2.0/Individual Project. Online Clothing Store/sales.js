   var object = {
    shop_information: [
        {
            shop_name: "Zara",
            address: "Manhattan Avenue, New York",
            unique_code: "NY656"
        }
    ],
    user_information:[
        {
            first_name:"Angelina",
            surname:"Jolie",
            age:47,
            birthday:"4.06.1975"
        }
    ],
    Clothing_items:[
        {
            name:"Blue jeans",
            category:"Trousers",
            price:50, //$
            stock:456
        }
    ]
}
let isLoggedIn = false;

let indexOfUser = null;

var addUser = function(firstname,sur,yearsOld,dd_mm_yyyy){
    if(!firstname||!sur||!yearsOld||!dd_mm_yyyy){
        console.log("Please put your firstname, surname, age, and your birthday(dd/mm/yyyy). Thank you")
        console.log("==================================================")
        return
    }
    object.user_information.push(
        { 
            first_name: firstname,
            surname: sur,
            age: yearsOld,
            birthday: dd_mm_yyyy
        }
    )
    console.log(firstname+" "+sur+" new User has been added")
    console.log("==================================================")
    return
}

function items (){
    function addItems(item,type,cost,stocks){
        if(!item||!type||!cost||!stocks){
            console.log("There is something wrong, please fill up the addItems properly")
            console.log("==================================================")
            return
        }
        object.Clothing_items.push(
            {
                name: item,
                category: type,
                price: cost,
                stock: stocks
            }
        )
        console.log("Items has been properly added "+item)
        console.log("==================================================")
    }
    

    function addStocks(name,add){
        object.Clothing_items.forEach(element=>{
            if(element.name.toLocaleLowerCase()==name.toLocaleLowerCase()){
                console.log("Item name: "+element.name)
                console.log("Stocks before adding "+element.stock)
                let newStocks = element.stock+add;
                console.log("Updated stocks "+newStocks)
                console.log("==================================================")
            }
        })
    }
    

    function neededStocks(value){
        object.Clothing_items.forEach(element =>{
            if(element.stock <= value&& 0 < value){
                console.log("Search for stocks that are lower than "+value)
                console.log("Item name: "+element.name)
                console.log("Item category: "+element.category)
                console.log("This item has only "+element.stock+" stocks.")
                console.log("==================================================")
            }
        })
    }
    return{
        addStocks: addStocks,
        addItems: addItems,
        neededStocks:neededStocks
    }
}

function userIsLoggedIn(name,surname){
    if(isLoggedIn){
        console.log("User is already log in, please log out before logging in to a different account")
        console.log("==================================================")
        return
    }

    object.user_information.forEach((element,i) => {
        var information = element; 
        if(information.first_name.toLowerCase() == name.toLowerCase() && information.surname.toLowerCase() == surname.toLowerCase()){
            isLoggedIn = true;
            indexOfUser = i;   
            let user = object.user_information[indexOfUser]
            console.log(user.first_name+" "+user.surname+" is Logged In")     
                        
        }
    });

    if(!isLoggedIn){
        console.log("User is not Log in")
    }
    console.log("==================================================")
    return order;
}

function userIsLoggedOut(){
    if(isLoggedIn){
        isLoggedIn = false;
        indexOfUser = null;
        console.log("User has been Log Out")
    }else{
        console.log("User has already been Log out")
    }
    console.log("==================================================")
    return
}

let orderedItems = [];

function order(item_name,quantity){
    if(!isLoggedIn){
        console.log("Please log in before ordering an item")
        console.log("==================================================")
        return
    }
    object.Clothing_items.forEach((element,i)=>{
        if(element.name == item_name){
        orderedItems.push(
            {
                unit:quantity,
                indexOfItem: i
            }
        );
        }
    })
}

function checkout(){
    let grandTotal =[];
    object.Clothing_items.forEach((value)=>{
        grandTotal.push({
            name: value.name,
            total: 0,
        })
    })
    orderedItems.forEach((value)=>{
        object.Clothing_items[value.indexOfItem].stock = object.Clothing_items[value.indexOfItem].stock - value.unit;
        grandTotal[value.indexOfItem].total =grandTotal[value.indexOfItem].total+ value.unit;
    })
    let total = null;
    grandTotal.forEach((value,i)=>{
    let totalPrice = null;
    totalPrice = value.total * object.Clothing_items[i].price;
    total = total+ totalPrice
    console.log(`Item name: ${value.name}`)
    console.log(`Unit: ${value.total} x Price:$${object.Clothing_items[i].price} = Total Price: $${totalPrice}`)
    console.log("==================================================")
    })
    
    console.log(`With a total of $${total}`)
    console.log("==================================================")
}


addUser("Kurt","Quejada",18,"28.08.2004");
var item = items();
item.addItems("TEXTURED STRIPED T-SHIRT","T-shirt",35,40);
item.addStocks("Blue jeans",20);
userIsLoggedIn("kurt","quejada");
order("Blue jeans",20);
order("TEXTURED STRIPED T-SHIRT",20);
order("Blue jeans",20);
checkout();
userIsLoggedOut()

