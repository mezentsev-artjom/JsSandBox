console.log("hello from script!")

const name = 'Harry Potter';
const age = 31;
const job = 'Wizzard';
const city = 'London';
const gender = 'male'

console.log(typeof(name));
console.log(typeof(age));

function hello(){
    return 'hello';
}


//arrays
const fruit = ['apple', 'banana', 'orange', 'pear',]
console.log(fruit);
//add an element to the array
fruit.push('lemon');
//to sort ann array
console.log(fruit.sort());
//delete the very first element
fruit.shift();
console.log(fruit);
//delete the very last element
fruit.pop();
console.log(fruit);

//loop through the array
fruit.forEach(item => {
    console.log("fruit from array", item);
});

//date and Time
const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayHours = today.getHours();
console.log(todayHours);
let todayMinutes = today.getMinutes();
console.log(todayMinutes);
let todaySeconds = today.getSeconds();
console.log(todaySeconds);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let FullDate = today.toLocaleDateString("en-US", options);
console.log(FullDate);

const html = `
    <h1> ${FullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>gender: ${gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>


`;

document.body.innerHTML = html;