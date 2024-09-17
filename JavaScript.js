//=============== JavaScript Display Possibilities==============

console.log("Hello From JavaScript")

//==========================Comment your code===================

//topic-2: inline comment 

//multiple line comment 

/*
fayez 
ullah
*/

/* topic-3: Data Types:
undefined, null, boolean, string, symbol, number and object
*/

//=================================Declare Variable===================
//------var-----
var myName = "Fayez"
console.log(myName)

myName = 8
console.log(myName)

//-------chatGpt example -----
var x = 10
if (true){
    var x = 20       // same x; redeclared and overwritten
}
console.log(x)

// --------variable: let---------
let ourName = "freeCodeCamp"
console.log(ourName)

// ----------chatGpt example:-----------
let y = 10;
if (true) {
  let y = 20; // Block-scoped 'y', different from the outer 'y'
  console.log(y); // Output: 20
}
console.log(y); // Output: 10

//------------- variable: const------------
const pi = 3.14
console.log(pi)

//============================== Storing values with assignment operator =================
var a;
var b = 2;
console.log(a)
console.log(b)
a = 7;
b = a;
console.log(a)
console.log(b)

//============================= initializing variables with assignment operator ====================
var  a = 9;
console.log(a)

//==================uninitialize variable==================
var a = 5;
var b = 10;
var c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String! ";

console.log(a)
console.log(b)
console.log(c)

//========================= Case sensitivity in variable =======================
//lower and upper case does matter!!

//=================================Basic Match===================
var sum = 10+10;
console.log(sum)

var difference = 45-9;
console.log(difference)

var product  = 8 * 10;
console.log(product)

var quotient = 33/11;
console.log(quotient)

//===========================increment and decrement  number==================
var num = 87;
num = num+1;
console.log(num)
num++;
console.log(num)
num+=1;
console.log(num)
 
var num1 = 87;
num1 = num1-1;
console.log(num1)
num1--;
console.log(num1)
num1-=1;
console.log(num1)

//==================================Decimal number:=====================
var myDecimal = 0.009;
console.log(myDecimal)

//==================================multiply Decimals ==================================
var product = 2.5 * 2.3;
console.log(product) 

//================================== divide Decimals================================== 
var quotient = 4.4 / 2.0;
console.log(quotient) 

//==================================finding Remainder ==================================
var remainder;
remainder = 11 % 3;
console.log(remainder) 

//================================== augmented operation ==================================
//================================== String operation==================================
var firstName = "Fayez";
var lastName = " Ullah";

console.log(firstName+lastName)

//==============Escaping literal quotes in strings (we can highlights any string with quotes)==========
var info = "I am Fayez. I am studying at \"CUET.\" I want to Join at \"ML\" company after completing my undergraduate degree."
console.log(info)

//=================using single quotes================
var myString = 'I am Fayez. I am studying at "CUET." I want to Join at "ML" company after completing my undergraduate degree.'
console.log(myString)

//====================== concatenate strin================
var name = "The name of " + "Our university is CUET"
console.log(name)

var ourStr = "This is Dhaka "
ourStr += ourStr
console.log(ourStr)

var Strour = "This is Dhaka "
Strour += "and Welcome to Dhaka"
console.log(Strour)

var OurName = "FreeCodeCamp"
var OurStr = "Hello, our name is "+OurName+", How are you?"
console.log(OurStr)


//======================Find the length of the string==============
var firstName = "Fayez"
n = firstName.length
console.log(n)

var firstName = "Fayez"
console.log(firstName.length)


console.log(firstName[0])
console.log(firstName[4])
console.log(firstName[-1])   //not possible it is in JavaScript
console.log(firstName[firstName.length-1])
//console.log(firstName[0:2])   not possible


//==========================String immutability==================================
//String are immutable. that means we can not change any single character of string.
//If it necessary to change any character, we should change the full string

var Str = "Jello JavaScript"
Str[0] = 'H'
console.log(Str)  //H will not change as string is immutable.

var Str = "Jello JavaScript"
Str = "Hello JavaScript"   // we sould replace full string instead of single character
console.log(Str) 


//================================== Word Blank==================================
function wordBlanks(nyNoun, myAdjective, myVerb, myAdverb){
  result = "";
  result += "The " + myAdjective + " " + nyNoun +" "+ myVerb + " "+ "to the store " + myAdverb;
  return result
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))

//================== Store multiple values with Array and access data with index===============

var array = ["Fayez", 23];
console.log(array[0])

//-------------Nested Array and access data with index----

var ourArray = [["The universe", 42], ["everything", 101010]];
console.log(ourArray[0])
console.log(ourArray[0][0])
console.log(ourArray[1][1])
console.log(ourArray[0][1])

//--------modify array data with index=========
var array = [18,65,99];
array[1] = 100;
console.log(array)   //array is updated but it's not possisble for string

//--------Aaccess multidimentiobal arrays with index-------------
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
console.log(myArray[0]);
console.log(myArray[0][1]);
console.log(myArray[2][1]);
console.log(myArray[3][0]);
console.log(myArray[3][0][1]);
console.log(myArray[3][1]);

//=============== manipulate the with following functions================
//----------push function (add element from the last)----------
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["Happy","Joy"]);
console.log(ourArray)        //push from last
ourArray.push("Happy","Joy");
console.log(ourArray)

//-------------pop function  (remove last element)-----------
var OurArray = [1,2,3]
OurArray.pop()         
console.log(OurArray)  //pop from last 
OurArray.pop()         
console.log(OurArray)
OurArray.pop()         
console.log(OurArray)
OurArray.pop()         
console.log(OurArray)

//----------shift function (Almost simillar to pop but remove 1st element)---------
var myArray = [1,2,3];
myArray.shift()
console.log(myArray)

var myArray = [['John',23],['dog',3]]
myArray.shift()
console.log(myArray)

//-----------unshift function (similar to the push but add element from the beginning)--------
var myarray = [1,2,3]
myarray.unshift(30)
console.log(myarray)

var myArray = [['John',23],['dog',3]]
myArray.unshift("Fayez")
console.log(myArray)

var myArray = [['John',23],['dog',3]]
myArray.unshift(["Fayez",'Usha'])
console.log(myArray)

//==================================Shopping list==================================
var mylist = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]
console.log(mylist)

//================ Write reusable code with function =============
function ourReusableFunction(){
  console.log("Heyya, World");
}

ourReusableFunction()

//-----------passing values to functions with arguments----------
function ourFunArg(a, b){      //duplicate function name is not possible
  console.log(a - b);
  console.log(a + b);
  console.log(a * b);
}
ourFunArg(10,5)

//----------Global scope and functions
//(variable which are defined outside of a function block is called global scope)
 
var myGlobal = 10;   //global variable and all the functions can acces it

function fun1(){
  oopsGlobal = 5;   //if we used var keyword here, then it would not global variable. as there is no var keyword any function can access it also

}

function fun2() {
  var output = " ";
  if (typeof myGlobal != "undefined"){     //undefined means, a variable that have been declared but not yet assigned a value.
    output += "myGlobal: " + myGlobal +"\n";
  }
  if(typeof oopsGlobal!= "undefined"){
    output += "oopsGlobal: " + oopsGlobal;  // as no 'var' key word in fun1 so it will be acceessible cz of not global.
  }
  console.log(output);
}
fun1()
fun2()

//------------using 'var' keyword in function-3

var myGlobal = 10;   //global variable and all the functions can acces it

function fun3(){
  var oopsGlobal = 5;   //if we used var keyword here, then it would not global variable. as there is no var keyword any function can access it also

}

function fun4() {
  var output = " ";
  if (typeof myGlobal != "undefined"){     //undefined means, a variable that have been declared but not yet assigned a value.
    output += "myGlobal: " + myGlobal +"\n";
  }
  if(typeof oopsGlobal!= "undefined"){
    output += "oopsGlobal: " + oopsGlobal;  // as no 'var' key word in fun1 so it will be acceessible cz of not global.
  }
  console.log(output);
}
fun3()
fun4()


//----------Local scope and function
//----------variable that aredeclare within function and can be visible only that function
function myLocalScope(){
  var myVar = 50;
  console.log(myVar)
}
myLocalScope()

//console.log(myVar)   // can't print myVar as myVar is local variable

//local vs global scope function

var outervariable = "T-Shirt";

function shop(){
  var outervariable = "Sweater";
  return outervariable;
}
console.log(shop());
console.log(outervariable);

//Return a value from a function with return

function minusSeven(num){
  return num - 7;
}
console.log(minusSeven(10))

function minusSeven(num){
  a = num - 7
  return a;
}
console.log(minusSeven(20))

//============== understanding undefined value returned from a function-=========

var sum = 0;
function sumThree(){
  sum = sum+3;
}
console.log(sum)   //undefined.as return is not done in function so sum=0 will print

//================================== Assignment with return function
changed = 0;
function change(num){
  return (num+5)/3;
}

changed = change(100);
console.log(changed);

//==================================Stand line

function nextInLine(arr, item){
  arr.push(item)
  return arr.shift();

}
var testarr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testarr));   //convert JSON string format 
console.log(nextInLine(testarr, 6));
console.log("After: " + JSON.stringify(testarr));

//==================================Boolean value  (another datatype)
//False and True are two boolean data type

//==================================Use conditional logic with if statement 

function TrueorFalse(isItTrue){
  if (isItTrue){
    return "Yes, it's true";
  }
  return "No, It's not true";
}

console.log(TrueorFalse(true))
console.log(TrueorFalse(false))

//==================================Comparison with the equality operator 

function TestEqual(val){
  if (val==10){
    return "Equal";
  }
  return "Not equal";
}

console.log(TestEqual(10));

//================================== Comparison with the strict equality operator 

//equality operator (==):
//do the type conversion and then compare

/*
3 == 3  (true)
3 == '3'   (false)  //string '3' converted to int and then compare
*/

//Strict equality operator (===):
//Do not use type conversion

/*
3 === 3 (true)
3 === '3' (false)
*/

function TestStrict(val){
  if(val===12){
    return "Equal";
  }
  return "Not equal";
}
console.log(TestStrict(10))

//strict operator
function TestStrict1(val){
  if(val==='10'){
    return "Equal this";
  }
  return "Not equal this";
}
console.log(TestStrict1(10))   //not equal though the number is 10.

//equality operator 
function TestStrict2(val){
  if(val=='10'){
    return "Equal this";
  }
  return "Not equal this";
}
console.log(TestStrict2(10))

//================================== Practical comparing differemnt values

//Equality
function CompareEquality(a, b){
  if(a == b){
    return "The numbers are Equal."
  }
  return "The numbers are not equal."
}
console.log(CompareEquality(10, '10'));


//Strict
function CompareStrict(a, b){
  if(a === b){
    return "The numbers are Equal."
  }
  return "The numbers are not equal."
}
console.log(CompareStrict(10, '10'));

//=================================Comparison with the inequality operator

function CompareInt(a, b){
  if(a != b){
    return "The numbers are not Equal."
  }
  return "The numbers are  equal."
}
console.log(CompareInt(10, '10'));

//==================================Comparison with the strict inequality operator (concept discussed before)

function CompareStrictInt(a, b){
  if(a !== b){
    return "The numbers are not Equal."
  }
  return "The numbers are  equal."
}
console.log(CompareStrictInt(10, '10'));

//==================================Comparison with the logical And operator
function testGreaterThan(val){
  if(val > 100){
    return "Over 100";
  }
  return "Over 10";
}
console.log(testGreaterThan(10))

//====================Comparison with the logical greater than or equal operator
function testGreaterThan(val){
  if(val >= 100){
    return "Over 100";
  }
  return "Over 10";
}
console.log(testGreaterThan(100))

//=============topic-36: Comparison with the logical less than  operator (<)
//=============topic-37: Comparison with the logical less than or equal operator(<=)

//==============logical And operator=============

function testLogicalAnd(val){
  if(val<=50){
    if(val>=10){
      return "Yes";
    }
  }
  return "No";
}
console.log(testLogicalAnd(300))

//============using logical And=============
function testLogicalAndOperator(val){
  if(val<=50 && val>=10){
      return "Yes";  
  }
  return "No";
}
console.log(testLogicalAndOperator(30))

//==============logical Or operator============
function testLogicalOrOperator(val){
  if(val<=50 || val>=10){
      return "Yes";  
  }
  return "No";
}
console.log(testLogicalAndOperator(30))

//===================== if, else and else if statement==============
var names = ["Hole-in_one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", " Go home!"]
function golfScore(par, strokes){
  if (strokes==1){
    return names[0];
  }
  else if(strokes == par-2){
    return names[1];
  }
  else if(strokes == par-1){
    return names[2];
  }
  else if(strokes == par){
    return names[3];
  }
  else if(strokes == par+1){
    return names[4];
  }
  else if(strokes == par+2){
    return names[5];
  }
  else if(strokes >= par+3){
    return names[6];
  }
  else{
    return " Not calculated"
  }
}
console.log(golfScore(5,4));

//==============switch-case statement (break, default)==========
function SwitchofStuff(val){
  answer = "";
  switch(val){
    case "a":
      answer = "Apple";
      break;
    case "b":
      answer = "ball";
      break;
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "doll";
      break;
    case "e":
      answer = "egg";
      break;
    default:
      answer = "Stuff";
  }
  return answer;
}
console.log(SwitchofStuff("a"))

//============= Multiple identical options in switch statements===========
function SequentialSize(val){
  var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      return "Nothing";
  }
  return answer;
}
console.log(SequentialSize(90))

//=================Returning Boolean Values from Functions=========
function BooleanValue(a,b){
  if(a<b){
    return true;
  }
  else {
    return false;
  }
}
console.log(BooleanValue(100,20))


//another way:
function BooleanValueIs(a,b){
    return a<b;
}
console.log(BooleanValueIs(10,20))

//topic-43: returning early pattern from function
function abTest(a, b){
  if (a<0 || b<0){
    return "Undefined";
  }
  else {
    result = Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
    return result;
  }
  
}
console.log(abTest(5,5));


//------------------Counting Cards-------------------

var count = 0;
function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;    
  }

  var holdbet = 'Hold';
  if(count>0){
    holdbet = 'Bet';
  }
  return count+ " "+ holdbet;
}
console.log(cc(2));
console.log(cc("K"));
console.log(cc(4));
console.log(cc(6));
console.log(cc("A"));
console.log(cc("J"));

//-------------------------------------Build Objects----------------------------------
var testObject = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats",
  "restaurant": "Sky lounge",
  "Location": "GEC",
  "Price": 599
};

//--------Dot Notation----------
var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
console.log(hatValue)
console.log(shirtValue)
console.log(testObject.shoes)

//--------Bracket Notations------
console.log(testObject["restaurant"])
console.log(testObject["Location"])

//--------Variables-------------
var taka = "Price";
console.log(testObject[taka])

//-----Updating Object Properties----
var myDogUpdate = {
  "DogName": "pinku",
  "Color": "Black",
  "Leg": 4,
  "tails": 1,
  "friend": ["zinku","linku"]
};
console.log("Object before updated:\n",myDogUpdate)
myDogUpdate.Leg = 50;     //updated
console.log("Object after updated:\n",myDogUpdate)
myDogUpdate.friend[0] = "Kutta";
console.log("Object after 2nd time  updated:\n",myDogUpdate)

//-----Add New Properties to Object---
var myDogAdd = {
  "DogName": "pinku",
  "Color": "Black",
  "Leg": 4,
  "tails": 1,
  "friend": ["zinku","linku"]
};
console.log("Object before added:\n",myDogAdd);
myDogAdd["Type"] = "Angry";         //added
console.log("Object after added:\n",myDogAdd);

//-----Delete Properties from Object---
var myDogDelete = {
  "DogName": "pinku",
  "Color": "Black",
  "Leg": 4,
  "tails": 1,
  "friend": ["zinku","linku"]
};
console.log("Object before added:\n",myDogDelete);
delete myDogDelete.friend;         //added
console.log("Object after added:\n",myDogDelete);
//----Objects for Lookups-----

function PhoneticLookup(val){
  var result = "";
  
  var lookup = {
    "alpha": "adams",
    "bravo": "Boston",
    "Charlie": "Chicago",
    "Delta": "Denver",
    "Echo": "Easy",
    "Foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(PhoneticLookup("Delta"));

//-----Testing Objects for Properties----
 var fayezObject = {
  "Versity": "CUET",
  "Dept": "CSE",
  "Section": "B",
  "ID": 1804094
 };
 function checkProperty (val){
  if (fayezObject.hasOwnProperty( val)){     //hasOwnProperty is a built-in method provided by JavaScript’s Object prototype. 
    return fayezObject[val];                 // hasOwnProperty is used to check whether a specific property exists directly on an object
  }
  else {
    return "Not found";
  }
 }
 console.log(checkProperty("group"));

//------Manipulating Complex Objects------
//creating more object by array

var myMusic = [
  {
    "sports": "football",
    "Country": "Argentina",
    "name": "Messi",
    "Age": 38,
    "Club": "Barcelona",
    "Maritial": "married",
    "position": ["Striker", "Mid-fileder", "Winger"]
  },
  {
    "sports": "Cricket",
    "Country": "Bd",
    "name": "Mash",
    "Age": 33,
    "Club": "Dhaka",
    "Maritial": "married",
    "position": ["Bowler", "Batsman"]
  }
];
console.log(myMusic)
console.log(myMusic[0].position)
console.log(myMusic[0].position[0])

//------Nested Objects--------
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "Outside": {
      "trunk": "jack",
    }
  }
};
console.log(myStorage.car.inside["glove box"]);
console.log(myStorage.car.Outside["trunk"]);

//---------Nested arrays------------
var myPlans = [
  {
    "type": 'Flowers',
    "list": ["rose", "tulip", "dandelion"]
  },
  {
    "type": "trees",
    "list": ["fir","pine","birch"]
  }
];
console.log(myPlans[1].list[1]);
console.log(myPlans[1]["list"][1]);

//--------Record Collection--------
//This is a problem base on object.

var collection = {
  "1804094": {
    "albums": "Slippery when wet",
    "artist": "Bon Jovi",
    "tracks": ["Let it Rock", "You Give Love a Bad Name"]
  },
  "1804095": {
    "albums": 1999,
    "artist": "Prince",
    "tracks": [1999, "Little Red covette"]
  },
  "1804096": {
    "artist": "Bon Jovi",
    "tracks": [ ]
  },
  "1804097": {
    "albums": "ABBA Gold"
  }
};

//keep a copy of the collection for test
var collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
  if(value === ""){
    delete collection[id][prop];
  } 
  else if(prop ==="tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
console.log(updateRecords(1804095, "tracks", "test"));
console.log(updateRecords(1804097, "artist", "ABBA"));
console.log(updateRecords(1804094, "artist"));
console.log(updateRecords(1804094, "artist", "fayez"));
console.log(updateRecords(1804094, "tracks", "messi"));

//original object that i copied before operation
console.log(collectioncopy);

//=======================================While loops=============================
var array = [];
var i = 0;
while( i < 5) {
  array.push(i);
  i++;
}
console.log(array);

//======================================For loops===============================
var array = [];
for(i=0;i<10;i++){
  array.push(i);
}
console.log(array);
//-------Odd number------------
//self

//-------Count Backwards--------
//self

//--------Iterate through an Array-------
//self

//--------Nesting for loops--------

function MulAllArray(array){
  var product = 1;
  for (i=0; i<array.length;i++){
    for(j=0;j<array[i].length; j++){
      product *= array[i][j];
    }
  }
  return product;
}
console.log(MulAllArray([[1,2],[3,4],[5,6,7]]));

//======================================Do While loops==========================
var array = [];
i = 0;
do {
  array.push(i);
  i++;
} while(i < 5);
console.log(array)

//======================================Profile Lookup=========================
//first name and property pass korbo. if match, print the value of property.
//if property doesn't match, print the "No such property"
//if name doesn't found, print the "No such contact"

var contact = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "094857",
    "likes": ["Pizza","coding","Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "094890957",
    "likes": ["Magic","Ruti","Blsck Points"]
  },
  {
    "firstName": "Khan",
    "lastName": "Labib",
    "number": "09445757857",
    "likes": ["Burger","Fna","Yellow Points"]
  },
  {
    "firstName": "Fayez",
    "lastName": "Habib",
    "number": "094384658857",
    "likes": ["Sub","Ml","Ai Points"]
  }
];

function LookUpProfile(name, prop){
  for (i = 0; i<contact.length;i++){
    if(contact[i].firstName === name){
      return contact[i][prop] || "No such Property"
    }
  }
  return "No such contact";
}

console.log(LookUpProfile("Fayez","likes"));

//===============================Random Fractions and Whole Numbers===============
//--------Random fraction--------

function RandomFraction (){
  return Math.random();        //it will print the random fraction number b/w 0 and 1 but not exactly 1. always below 1.
}                              // it could be 0 but below 1
console.log(RandomFraction())

//-------------Random whole number---------------
var randomWholeNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomWholeNumberBetween0and19)    // random whole number might be 0 but not be 20. always below 20. as floor is used, so random whole number will between 0 and 19

//--------random whole number using function--------
function RandomWholeNumber(){
  return Math.floor(Math.random() * 10);   //between 0 and 9
}
console.log(RandomWholeNumber())

//------Randome whole number b/w range----------

function RandomWholeNumberRange(myMin,myMax){
  return Math.floor(Math.random() * ((myMax-myMin)+1))+myMin;   //between 0 and 9
}
console.log(RandomWholeNumberRange(5,15))

//========================================parseInt Function=======================
//this function ( "parseInt()" )takes string and returns integer

function convertToInt(str){
  return parseInt(str);
}
console.log(convertToInt("56"));

//-------parseInt with a radix(base)----
//convert binary to int

function ConvertToInt(str){
  return parseInt(str,2);
}
console.log(ConvertToInt("100110"));  //binary to decimal

//===========================================Ternary Operator======================

//-----using ternary operator-----
//condition ? statement-if-true : statement-if-false;
function CheckCondi(a,b){
  return a===b ?  true : false;
}
console.log(CheckCondi(10,100));

//------direct uisng return----
function CheckCondi(a,b){
  return a===b;
}
console.log(CheckCondi(10,100));

//----if else condition----
function CheckCondi(a,b){
  if(a===b){
    return true;
  }
  else{
    return false;
  }
}
console.log(CheckCondi(10,10));

//=======================Multiple Ternary Operators===============
//Check a number is positive,negative or zero by using ternary operator

function CheckNumber(num){
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(CheckNumber(-10));

//same problem by using if eelse statement
function CheckPosNeg (num){
  if(num > 0){
    return "The number is Positive";
  } else if (num < 0){
    return "The number is negative";
  }else {
    return "The number is zero";
  }
}
console.log(CheckPosNeg(0));

//==========================var vs let==========================

//var allow us to declare variable twise with same name whereas let doesn't allow us
//------using var-----
var catName = "Quincy";
var quote;
var catName = "Beau";
console.log(catName)

//-----using let-----

/* we get error as same variable declared twise 
let catName = "Quincy";
let quote;
let catName = "Beau";
console.log(catName) 
*/

// let er maddome block er tare block e and fucntion er tare function e access korte pare.
//var er maddome latest ta access nei. block and fucntion maintain korena (jhamela)

//------using var------
console.log("Using var:\n");

function CheckScope(){
  var i = "Function Scope";
  if(true) {
    i = "Block scope";       //'var' datatype by default
    console.log("Block scope is: ", i);
  }
  console.log("Function scope is: ", i);  //to print 'function scope' here we can use 'let'.
  return i;
}
CheckScope();

//---another one:.....
console.log("another one Using var:\n");

function CheckScopeVar(){
  //var i = "Function Scope";
  if(true) {
    var i = "Block scope";       //'var' datatype by default
    console.log("Block scope is: ", i);
  }
  console.log("Function scope is: ", i);
  return i;
}
CheckScopeVar();

//-----using let-----
console.log("Using let:\n");

function CheckScope2(){
  let i = "Function Scope";
  if(true) {
    let i = "Block scope";
    console.log("Block scope is: ", i);   //print 'block scope'
  }
  console.log("Function scope is: ", i);  //print 'function scope'
  return i;
}
CheckScope2();

//---another one:.....
console.log("another one Using let:\n");

function CheckScopeLet(){
  "use strict";
  //let i = "Function Scope";
  if(true) {
    let i = "Block scope";       //'var' datatype by default
    console.log("Block scope is: ", i);
  }
  console.log("Function scope is: ", i);   //occur an error as let is not declare for this.
  return i;
}
CheckScopeLet();

//=============================Cost Variable (Read-Only variable)===================
//it has all the features of let but const is only Read-Only variable.
//we can't re-assign to a const

//----using var----
 function printManyTimes (str){
  var sentence = str  + " is cool!";      //assign (if we use 'const' here, we get an error as const doesn't support re-assign as it is Read-Only variable)
  
  sentence = str + " is amazing!";        //re-assign and it's possible for var/let variable
  console.log(sentence);

 }
 printManyTimes("freeCodeCamp");

 //---using const----
// wil get an error..

 /*
 function printManyTimesConst (str){
  const sentence = str  + " is cool!";     
  
  sentence = str + " is amazing!";       
  console.log(sentence);

 }
 printManyTimesConst("freeCodeCamp");
 */

 //---another one using const---

 function printManyTimesConst1 (str){
  const SENTENCE = str  + " is cool!";     //only assign. there no re-assign.  
  console.log(SENTENCE);                   //Recommended to use upercase variable when we use const datatype

 }
 printManyTimesConst1("freeCodeCamp");

 //=========================== Mutate/change an Array Declared with const==================

 //-----re-assign of array gives an error with const datatype--------
 /*  givving error

 const s = [5, 7, 2];
 function editInplace(){
  s = [2, 5, 7];
 }
 editInplace()
 console.log(s)

 */

 //---------successful re-assign of array  with const -----
 const s = [5, 7, 2];
 function editInplace1(){
  s[0] = 2          //there will no problem if we re-assign index wise
  s[1] = 5
  s[2] = 2
 }
 editInplace1()
 console.log(s)

 //===========================revent Object Mutation=================
//---mutate of object---
function MutateObject () {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  try {
    MATH_CONSTANTS.PI = 99;       //successfully re-assigned
  } catch (ex) {
    console.log(ex)
  }
  return MATH_CONSTANTS.PI;
}

console.log(MutateObject())


//--------revent/prevent object mutate------
//by using object.freeze(), we can prevent mutation

function freezeObject () {
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);     //for it we can't re assign 
  try {
    MATH_CONSTANTS.PI = 99;       //successfully re-assigned
  } catch (ex) {
    console.log(ex)
  }
  return MATH_CONSTANTS.PI;
}

console.log(freezeObject())

//=================================Arrow function======================
//This is used to write concise Anonymous Functions 

//----Anonymous Function-------
var magic = function () {
  return new Date();       //print current date
}
console.log(magic())

//------convert anonymous function to Arrow function-----
var magic1 = () => {
  return new Date();       //print current date
}
console.log(magic1())

//-----removing return and curly braces (2nd bracket)---------
var magic2 = () =>  new Date();
console.log(magic2())

//-----using const instead of var-----
const magic3 = () =>  new Date();
console.log(magic3())

//=============================Arrow function with parameters===============

//-----uisng as usual function-----
var myContactGeneral = function(arr1, arr2) {
  return arr1.concat(arr2);
}
arr1 = [1, 2];
arr2 = [3, 4, 5];
console.log("The array concatination by using General function: \n", myContactGeneral(arr1, arr2));

//----using anonymous function----
var myContactAnonymous = function(arr1, arr2) {
  return arr1.concat(arr2);
}
arr1 = [1, 2];
arr2 = [3, 4, 5];
console.log("The array concatination by using Anonymous function: \n", myContactAnonymous(arr1, arr2));

//----using Arrow function with return----
var myContactArrowReturn = (arr1, arr2) => {
  return arr1.concat(arr2);
}
arr1 = [1, 2];
arr2 = [3, 4, 5];
console.log("The array concatination by using Anonymous function1: \n", myContactArrowReturn(arr1, arr2));

//----using Arrow function without Return----
var myContactArrowNoReturn = (arr1, arr2) =>  arr1.concat(arr2);

arr1 = [1, 2];
arr2 = [3, 4, 5];
console.log("The array concatination by using Anonymous function1: \n", myContactArrowNoReturn(arr1, arr2));




//=========================Higher order Arrow function=====================
//higher order arrow functions take functions as argument for processing collections of data
//One fucntion takes another function as an argument

//Problem: Compute the square of the only positive integers in the array--

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
}

const squaredIntegers = squareList (realNumberArray);
console.log("The square of the positive number: \n", squaredIntegers);


//-------another way-------
const realNumber = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squared = realNumber.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);

console.log("The square of the positive number (another way): \n", squared);

//===================Higher order Arrow function (default parameter)=========================

//------Using IIFE structure------ 
//(function() {.....})(); this is IIFE structure
//IIFE structure is mainly use for encapsulation and avoiding global function scope (though not mentioned in this code)

const increment = (function () {
  return function increment (number, value = 1){
    return number + value;
  };

})();
console.log("The sum by IIFE: \n", increment(5,2))
console.log("The sum by IIFE: \n", increment(5))

//---Using general function-----
function increment1 (number, value=1){
  return number + value;
}
console.log("The sum by in general: \n", increment1(5,2))
console.log("The sum by in general: \n", increment1(5))

//----using arrow function----
const increment2 = (number, value=1) => number + value;

console.log("The sum by Arrow: \n", increment2(5,2))
console.log("The sum by Arrow: \n", increment2(5))

//===========================Use Rest Operator With Function operator=====================
//it creates a function that takes a several number of arguments
// rest operator is basically 3 dots (...)

//---using IIFE formats----
const  Sum = (function () {
  return function sum (x, y, z) {
    const args = [x, y, z];
    return args.reduce((a,b) => a+b, 0);   //reduce function sum valus of array one by one. (for example: 0+1=1, 1+2=3, 3+3=6). Alternative of for loop
  };
})();
console.log("The sum by using IIFE :\n",Sum(1, 2, 3));

//---using 3 rest operator----
const  SumRest = (function () {
  return function SumRest (... args) {
    return args.reduce((a,b) => a+b, 0);   
  };
})();
console.log("The sum by using IIFFE+Rest :\n", SumRest(1, 2, 3));

//-------The benefit of Rest operator is to pass any number of arguments
const  SumRestMulti = (function () {
  return function SumRestMulti (... args) {
    return args.reduce((a,b) => a+b, 0);   
  };
})();
console.log("The sum by using IIFE+Rest Multi :\n", SumRestMulti(1, 2, 3, 4, 5));

//----Rest operator by general function---------
function SumRestMultiNormal (... args) {
    return args.reduce((a,b) => a+b, 0);   
  }
console.log("The sum by using Rest Multi+Normal :\n", SumRestMultiNormal(1, 2, 3, 4, 5));


//==============Spread operator to evaluate arrays in-place====================
//spread operator is look like 3 dots. uses for copying another array

//----without spread operator-----
const arr01 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr02

(function() {
  arr02 = arr01;   //not copied arr01 to arr02. it means arr01 and arr02 are simillar
  arr01[0] = "potato";
})();
console.log("The arr01 is: \n", arr01)
console.log("The arr02 is: \n", arr02)

//----using spread operator----
const array01 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let array02

(function() {
  array02 = [...array01];   //copied arr01 to arr02. 
  array01[0] = "Potato"
})();
console.log("After using spread operator The array01 is: \n", array01)
console.log("After using spread operator The array02 is: \n", array02)


//========================Destructive assignment==============================
//uses to assign variables from object

//----without using destructive assignment-----
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var a = voxel.x;    //a=3.6
var b = voxel.y;    //b=7.6
var c = voxel.z;    //c=6.54

console.log("Without using Destructive assignment: \n", a,b,c);

//----Using destructive assignment-----
const { x : d, y : e, z : f } = voxel;          //d=3.6, e=7.4, f=6.54     
console.log("By using Destructive assignment: \n", d,e,f);

//-----code-----
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemparatures) {
  const {tomorrow:TempOfTomorrow} = avgTemparatures;
  return TempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//-------Destructive assignment with nested objects------

const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTomorrow(forecast) {
  const {tomorrow: {max: getMaxVAlueOfTmrw}} = forecast;
  return getMaxVAlueOfTmrw;

}
console.log(getMaxOfTomorrow(LOCAL_FORECAST))

//------Destructive assignment to assign variables from Arrays------
const [a1, a2, a3] = [1, 2, 3, 4, 5, 6];
console.log(a1, a2, a3);

const [a01, a02, ,a04] = [1, 2, 3, 4, 5, 6];
console.log(a01, a02, a04);

//----swap two numbers by IIFE format----
let num_1 = 8, num_2 = 6;
(() => {
  [num_1, num_2] = [num_2, num_1];    //swapped 
})();
console.log(num_1,num_2);

//------Destructive assignment with Rest operator-----
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function RemoveFirstTwoElmnts (list){
  const [, , ...source2] = list;       //skip 1st two elements and print the rest of all
  return source2
}
console.log("Without destructive: \n",source)
console.log("Using destructive: \n", RemoveFirstTwoElmnts(source));

//-----destructive assignmnet to pass objecta as function parameters-------
//necessary for API call where pass everything but recieve what we need only

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
  return function half ({max, min}){     //receive only max and min from object by 2nd bracket (destructive)
    return (max + min)/2.0;
  }

})();
console.log("without destructive: \n", stats);
console.log("Using destructive: \n",half(stats))    //pass full object

//===========================create string using Template Literals==============================
//This is same as python f-string using backtick (`) and dollar symbol ($)
// we can do it in multiple line 

const person = {
  name: "fayez",
  age: 56
};

const greeting =`Hello, my name is ${person.name}! 
I am ${person.age} years onload.`;

console.log(greeting);

//================================= Simple Fields====================
//write concise object literal declarations

//--general way
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };

};
console.log(createPerson("Fayez", 56, "male"));

//----simple way---
const createPerson1 = (name, age, gender) => ({name, age, gender});

console.log(createPerson1("Fayez", 56, "male"));

//=============================Concise Declarative Functions==================
// we can use function in object 
//---normal way---
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";                 //didn't clear why this is used
    this.gear = newGear;          //this will update the value of gear
  }
};
bicycle.setGear(3);
console.log(bicycle.gear)

//----more easier way-----
const bicycle1 = {
  gear: 2,
  setGear (newGear) {
    "use strict";                 
    this.gear = newGear;       
  }
};
bicycle1.setGear(3);
console.log(bicycle1.gear)

//============================Class Syntax========================
//Class syntax is used to define a constructor Function

//----without class syntax----
var SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');     //created new object (zeus) by using new keyword
console.log(zeus.targetPlanet)

//----using class syntax----
class SpaceShuttle2 {
  constructor (targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle2('World');     
console.log(zeus.targetPlanet)

//------return a class from function------
function makeClass () {
  class Vegetable {
    constructor (name) {
      this.name = name;
    }
  }
  return Vegetable;
}
 const Vegetable = makeClass ();
 const carrot = new Vegetable ('carrot');
 console.log(carrot.name);


//============================getters and setters======================
//it is used to access prive value from class
//getters is used to access and setters is used to update the private value

//---code the find out celcius from farenhite

function MakeClass () {
  class Thermostat {
    constructor (temp) {
      this._temp = 5/9 * (temp - 32);   //a variable with underscore (_) is means private variable. here _temp is private variable.
    }
    get temperature() {             //used for access the private variable
      return this._temp;
    }

    set temperature(updatedTemp){          //used for update the private value
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = MakeClass();
const thermos = new Thermostat(76);
console.log("The celciuis value without using set and get is: ", thermos)
let temp = thermos.temperature;           //access get!  parenthesis are not used as get and set are not functions normally.
thermos.temperature = 26                  //update the temperature by set
temp = thermos.temperature;
console.log("The updated temp after using get and set: ",thermos)





//================================Import vs Require================================

//======================The END====Yt: FreeCodeCamp.org====================
//==========The best yt tutorials. Appreciated===========
