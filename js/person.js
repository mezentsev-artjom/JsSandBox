console.log("hello from script!")

const name = 'Artjom Mezentsev';
const age = 17;
const job = 'TIT';
const city = 'Estonia';
const Gender = 'male'

console.log(typeof(name));
console.log(typeof(age));

function hello(){
    return 'My Birthday is comming soon!!';
}

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
    <h1> ${FullDate}
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>gender: ${Gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>
    </h1>


`;

document.body.innerHTML = html;