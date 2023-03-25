## basic-recursion

Using **recursion**, write a function called **joinRecursion** that takes array of strings and join them in one string
representing how many times the string str should be repeated.

```javascript
joinRecursion(["don't "," use "," loops. " ]); // => "don't use loops. "

```

## advanced-recursion
### CHOOSE ONE


#### OPTION 1

- [ ] Complete the function `getStringValues` and `sumNumericValues`.
- [ ] They take a single argument, an object containing nested objects of any depth.
- [ ] getStringValues: It returns all of the values of the objects that are strings.
- [ ] sumNumericValues: It returns the sum of all the numeric values.
- [ ] Your function will only be tested with objects that have strings, numbers, or other objects as properties.

```javascript
var exampleNestedObject = {
  name: "Tolstoy",
  age: 99,
  home: {
    roommates: 2,
    address: {
      street: {
        street1: "discombobulated",
        street2: null,
      },
      number: 13,
      city: "stilton",
      zip: 94618,
    },
  },
};

getStringValues(exampleNestedObject); // returns [ 'Tolstoy', 'discombobulated', "stilton" ]

sumNumericValues(exampleNestedObject); // returns 94732
```

#### OPTION 2

* [ ] flatten nested arrays.
  * Your solution should always return a flatten copy of the input array, regardless of how many nested levels are in the input array.
  * You must use recursion to solve this.

```javascript
flatten([1, [[2, 3, [4], 5], 6, [7, [8]], 9], 10]); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Available Resources for this Prompt

- MDN

