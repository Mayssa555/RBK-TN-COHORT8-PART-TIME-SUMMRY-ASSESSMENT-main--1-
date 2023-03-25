function joinRecursion(arr) {
  if (arr.length===0){
    return ''
  } else if (arr.length===1){
    return arr[0]
  } else {
    return arr[0]+joinRecursion(arr.slice(1))
  }
}

// OPTION 1

var getStringValues = function (object) {
  // YOUR CODE HERE
};

var sumNumericValues = function (object) {
  // YOUR CODE HERE
};

// OPTION 2

function flatten(arr) {
 let result=[]

 for (let i=0 ; i<arr.length; i++){
  if (Array.isArray(arr[i])){
    let doneArr=flatten(arr[i])
    result=[...result,...doneArr]
  } else{
    result.push(arr[i])
  }
 } return result 
};

