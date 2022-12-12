let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

function removeItem(item){
    for (let i = 0; i < groceryList.length; i++) {
        if (groceryList[i] === item) {
         groceryList.shift(item);
         console.log(item);
        }
    }
}

removeItem('paprika'); // []
console.log(groceryList);