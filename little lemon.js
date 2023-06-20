const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;
    function getPrices(taxBoolean) {   
    let finalPrice = "";
    for (var i = 0; i < dishData.length; i++) {   
         let finalPrice = 0                                           
        if (taxBoolean == true) {                  
            let name = dishData[i]['name'];
            let price = dishData[i]['price'];  
            console.log(`Dish: ${name}, Price (incl. tax): $${+price * tax}`);         
        } else if (taxBoolean == false) {            
            let name = dishData[i]['name'];
            let price = dishData[i]['price'];
            console.log('Prices without tax:'); {
                console.log(`Dish: ${name}, Price (incl. tax): $${+price}`);
            }
        } else {                                       
            console.log("You need to pass a boolean to the getPrices call!")
            return;
        }
    }
console.log(getPrices(true));
console.log(getPrices(false));   
}
    function getDiscount(taxBoolean, guests) {   
        getPrices(taxBoolean);                   
        try {                                    
            if (typeof (guests) != 'number' && (guests) < 0 && (guests) > 30) { 
                var discount = 0;
                if (typeof (guests) < 5) {
                    discount = 5;
                }
                else if (typeof (guests) >= 5) {
                    discount = 10;
                    console.log('Discount is: $' + discount);
                }
                else {                                                         
                    console.log('the second argument must be a number between 0 and 30')
                }
            }
        } catch (err) { 
            alert('catch', err);
        }
    }
getDiscount(true, 2);
getDiscount(false, 10)
