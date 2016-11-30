var a = [1,1,2,1,1,3,4,2,5,9,8];
//declaring a variable using an operator a and giving it value of the string of numbers in this statement

function occurrences(arr){
  //here we are defining a function using the keyword "function" where the function is occurences of arr
  var obj = {};
  //declaring a varibale (keyword) operator a
  var highest = 0;
  //delcaration of variable highest equals to 0
  var highestKey;
  //declaration of var highestKey

  for(var i = 0;i<arr.length;i++){
    //This is a for loop such that variable i is initialized under the condition that i is less than array length
    //and the final expression of 1 by 1 iterations
    if(obj[arr[i]]){
      //conditional statement while if true it iterates by 1
      obj[arr[i]]++;
    }else{ //or else
      obj[arr[i]] = 1; //it is one
    }
  }

  for(var key in obj){
    if(obj[key] > highest){
      highest = obj[key];
      highestKey = key;
    }
  }
  return highestKey;

}
console.log(occurrences(a));
