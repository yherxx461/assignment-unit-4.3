console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
// Create a function called 'addItem' and input the parameter for a string 'item'
let basket = [];
function addItem(item) {
    // add the new item to the global array
    console.log(item);
// - add the new item to the global array `basket`.
    basket.push(item);
// - return `true` indicating the item was added
console.log('item added to array successfully:');
    return true;
}
addItem('new Item');
console.log(basket);
// // Create a function called `listItems`
function listItems()
// for (i = 0; i <= basket.length; i++){
// console.log(basket[i]);
// For loop
{
for (i=0; i<basket.length; i++){
    console.log(basket[i]);
}
}
// For of loop method
//     for (let list of basket){
//         console.log(list);
//         }
//         return true;
// }
// console.log(basket);
listItems();
// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}