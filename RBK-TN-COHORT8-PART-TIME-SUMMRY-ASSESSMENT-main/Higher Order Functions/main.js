function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

//: you can only use one of the high order functions once.
//  Means that if you use filter in the first function you can not use it in the next function !
// just use another higher order function.



//Write a function calculateTotal that takes an array of objects representing items in a shopping cart.
//Each object has two properties: price and quantity. The function should use each to iterate over the array and calculate
//the total price of all the items in the cart.The function should return the total price.
var cart = [
  { price: 10.99, quantity: 2 },
  { price: 5.99, quantity: 3 },
  { price: 8.49, quantity: 1 },
];

function calculateTotal(cart) {
  let total=0
  let item=cart[i]
 cart.each(function(item){
  total += item.price*item.quantity
 })
   return total
}

// calculateTotal(cart) should print 48.44





// Write a function called countEvenNumbers that takes an array of numbers and returns the count of even numbers
//in the array. Students should use only one of the higher-order functions provided to implement this function.

function countEvenNumbers(numbers) {
 let evenNumbers=numbers.filter(function(number){
  return number % 2 === 0
 })
return evenNumbers.length
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countEvenNumbers(numbers) should return 5







// Write a function called filterWords that takes an array of words and a string prefix and returns a new array of words
// that start with the given prefix. You can only use one of the higher-order functions provided to implement this function.

function filterWords(words, prefix) {
 let filterWords=words.reduce(function(result,word){
  if (word.startsWith(prefix)){
    result.push(word)
  }
  return result
 },[])
 return filterWords
}








// Write a function called capitalizeFirstLetter that takes an array of strings as an argument and returns 
// a new array with the first letter of each string capitalized.
//For example: capitalizeFirstLetter(["apple", "banana", "cherry"])  returns ["Apple", "Banana", "Cherry"]

function capitalizeFirstLetter(strings) {
 let capitalizedStrings=strings.map(function(string){
  return string.charAt(0).toUpperCase()+string.slice(1)
 })
 return capitalizedStrings
}



