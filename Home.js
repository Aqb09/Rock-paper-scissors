console.log("hello");

//alert('yo this is Aqib');


//variables

var b = 'smoothie';
console.log(b);


var someNUmber = 45;
console.log(someNUmber);


//var age= prompt('What is your age ?');

//document.getElementById('someText').innerHTML = age;


//Number in javascript
var num1 = 10;

//increment
num1++;

//decrement
num1--;
console.log(num1);

//divice, multiply *, remainder %
console.log(num1 % 6);

//increment or dec by any num you want
num1 += 10;
console.log(num1);


/*functions
1.create function 
2. call function

*/
/*function fun(){
    alert('this is a function');
}

fun();*/

/* lets take a funxtion that takes 
in a name and says hello followed by your name*/


function greeting(yourName){
     
     var result = 'Hello' + ' ' + yourName;
     console.log(result);
} 


//var name = prompt('What is your name?');
//greeting(name);

//How do agruments work in functions?
//how do we add 2 numbers in a function?

function sumNUmbers(num1,num2){
    var result = num1 + num2;
    console.log(result);
}

sumNUmbers(10,10);


/*While Loops

var num = 0;

while(num < 100){
    num+=1;
    console.log(num);
}

*/


//For loop 

for(let num = 0 ; num <= 100; num++){
    console.log(num);
}


//String in js (common method)

let fruit ='banana,apple,orange';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));
console.log(fruit.split(''));

//Array

let fruits = ['banana','apple','orange'];
fruits = new Array('banana','apple','orange');

//alert(fruits[2]); // access value atindex 2nd

fruits[0]='pear';
console.log(fruits);


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common mehtods

console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits,fruits.pop(),fruits); // removes last item
console.log(fruits,fruits.push('blackberries'),fruits); //appends
console.log(fruits[3]);
fruits[3] = 'new fruit';
console.log(fruits);
fruits.shift(); // removes fisrt element from a list
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array 
console.log(fruits);


let vegetables = ['asparagus','tomato','brocolli',];
let allGroceries = fruits.concat(vegetables); //Combine Array
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());


let someNumbers = [5, 10, 2, 25, 3, 255, 5, 334, 321];
console.log(someNumbers.sort(function(a,b){return a-b}));
console.log(someNumbers.sort(function(a,b){return b-a}));


let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
    
}
console.log(emptyArray);



//Objects in javascript

let student = {
    first: 'Aqib',
     last: 'Shah',
      age:25,
       height:170,
        studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;             
        }
    };

   // console.log(student.first);
      //  console.log(student.last);
//student.first='notme';
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());


//conditionals, Control flows(if else)
//18-35 target demographnc
// && AND
// || OR

let age =  45;

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
    
} else{
    status = 'not my audience';
    console.log(status);
}


//Switch Statements 
//differentiate betn weekday v weekend
//day O ---> Sunday 
// day 6 ---> Saturday ---->
//day  4 ----> Thursday ---> weekday

switch (5) {
    case 0:
        text ='weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text ='weekday';
    
}

console.log(text);


