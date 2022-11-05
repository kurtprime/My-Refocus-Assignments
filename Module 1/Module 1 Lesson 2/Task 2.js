//Task 2: A restaurant menu
//Create an object which represents a menu. It should have the following fields:
//  "restaurantName"
//  “dishes”, which is an array from task 1
//  “displayRestaurantName”, an object method that displays the restaurant name
//  “displayMenu”, an object method that displays information about each dish


Dish_ID = {
    "RestaurantName" : "PizzaHut"  ,
    "Dishes" : [
        {'Dish_Name' : 'Naked - Bone Out Wing',
        'Dish_Ingredients': 'WATER, SEASONING, SALT, CORN MALTODEXTRIN, POTASSIUM CHLORIDE, GARLIC POWDER, ONION POWDER, CHICKEN FAT, FLAVOR' ,
        'Dish_Cost': '₱500'
        },
        {'Dish_Name' : 'Pizza',
        'Dish_Ingredients' : ' ENRICHED FLOUR (BLEACHED WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, FERROUS SULFATE, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID), WATER, YEAST, SOYBEAN OIL.',
        'Dish_Cost' : '₱499'
        },
        {'Dish_Name' : 'Beef',
        'Dish_Ingredients' : ' BEEF, WATER, SALT, SEASONING (GARLIC POWDER, SALT, ONION POWDER, DEHYDRATED ONION, SPICES, NATURAL FLAVORS).',
        'Dish_Cost' : '₱50'
        },
    ],
    "DisplayRestaurantName" : function () {
        console.log(this.RestaurantName)
    },
    "DisplayMenu" : function () {
        for(Dish of this.Dishes){
            console.log('Welcome to '+ this.RestaurantName)
            console.log(Dish.Dish_Name + ' cost ' + Dish.Dish_Cost)
            console.log('contains of '+ Dish.Dish_Ingredients)
            
        }
    },
}

// I'm not sure how to display the restaurant name just once. 
Dish_ID.DisplayMenu();