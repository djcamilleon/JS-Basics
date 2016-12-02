//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
  if (name === "Tyler"){
    return true
  }
return false
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName(){
  var name = prompt("Please enter your name", "Harry Potter");
    return name
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
  var name=getName();
 alert ("Welcome, " + name);
}

//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?

  //Answer Here
// Parameters are variables passed into a function. Arguments are the values passed in as the parameters.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
// 0
// NaN
// false
// undefined
// null
// "" ("empty string")
// You check if something is falsy by using comparison operators.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName(){
    return "name";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName
//Now alert the result of invoking newMyName
alert (newMyName());



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
  return function (){
    return "name";
  }
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();