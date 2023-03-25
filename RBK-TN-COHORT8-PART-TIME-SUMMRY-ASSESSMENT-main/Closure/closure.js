// PART 1

// Create a function called "createPerson" that takes in a name 
//as a parameter and returns an object with the following properties:
// "getName" a function that returns the name of the person
// "setName" a function that sets the name of the person

//example 1 :
// var person1 = createPerson("Mohamed");
// person1.getName(); // should return "Mohamed"
// person1.setName("Samir");
// person1.getName(); // should return "Samir"

function createPerson(name) {
 return {
    getName(){
        return name
    },
    setName(anotherName){
        name=anotherName
    }
 }
}

// Part 2

// create a function makeCounter that takes in one parameter (initial) 
//and it has one property wich is a counter.
// the value of the counter is initially set to the initial (parameter)
// value if it is provided if not it is set to 0.
// the makeCounter function has 3 Methods :
// increment wich  returns a number that is one higher than the counter 
//used to be.
// decrement wich  returns a number that is one lower than the counter 
//used to be.
// reset wich  resets the counter back to the initial value or to 0 if 
//the initil value is not provided.

//example 1 :
// var counter = makeCounter(10);
// counter.increment();
// ===> 11
// counter.increment();
// ===> 12
// counter.decrement();
// ===> 11
// counter.reset();
// ===> 10

// example 2 :
// var counter2 = makeCounter();
// counter2.increment();
//===> 1
//counter2.increment();
//===> 2
//counter2.decrement();
//===> 1
//counter2.reset();
//===> 0

function makeConter(initial=0) {
 let currentNumber=initial
 return {
    increment(){
        currentNumber++
        return currentNumber
    },
    decrement(){
        currentNumber--
        return currentNumber
    },
    reset(){
        currentNumber=initial
        return currentNumber
    }
 }
}
