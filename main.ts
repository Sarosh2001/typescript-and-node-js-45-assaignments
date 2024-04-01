// //Muhammad Sarosh Nadeem
//Task 2
let personName: string = "Eric";
console.log(`Hello ${personName},would you like to learn some Python today?`);

//Task 3

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Muhammad Sarosh Nadeem";

//in lowercase
console.log("lowercase:", personName.toLowerCase());

//in upper
console.log("uppercase:", personName.toUpperCase());

//titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));


//Task 4

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
//its author. Your output should look something like the following, including the quotation
//marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

//Task 5

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
//its author. Your output should look something like the following, including the quotation
//marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);


//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said,"${quote}"`;

console.log(message);



// Task 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Make sure you use each character combination, "\t" and "\n", 
//at least once. Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.

let personName: string = "\t\n  Muhammad Sarosh Nadeem  \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());


// Task 7 & 8
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log (5+3);
console.log (10-2);
console.log (4*2);
console.log (16/2);

// Task 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber: number = 4;
console.log (`My favorite number is ${favoriteNumber}.`);

// Task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

author: [Muhammad Sarosh Nadeem]
date: [Thursday, Febrary 22, 2024]


// Task 11
let names : String [] = ["Ali","Haseeb","Wajahat","Muzamil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// // //Task 12
let names : string [] = ["Ali","Haseeb","Wajahat","Muzamil"];

let message : string = "Do you like to play football?"
console.log(names[0] + " "+ message )
console.log(names[1] + " "+ message )
console.log(names[2] + " "+ message )
console.log(names[3] + " "+ message )

//Task 13
let trasportation : string [] = ["Honda Motorcycle","Audi","Honda City"];
trasportation.map((items) => console.log(`I would like to own a ${items}`));

// //Task 14
let gestArr : string [] = ["Ali","Haseeb","Wajahat"];

gestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));

// //Taske 15
let guestArr : string [] = ["Sarosh", "Haseeb", "Ali", "Hamza"];
let canNotAttend : string = "Sarosh"

console.log(canNotAttend + " " "can not attend the dinner.")

let newGuest : string = "Nauman"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// console.log(guestArr)

guestArr.map((items) =>

console.log(`Dear ${items}, you are invited to the dinner.`)

// //Task 16
let guestArr : string[] = ["Sarosh", "Haseeb", "Ali", "Hamza"];

let canNotAttend : string = "Sarosh"

let newGuest : string = "Nauman"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

//Task 17
// Initial list of guests
let guests: string[] = ["Ali", "Bilal"];

// Informing that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.");

// Removing guests until only two names remain
while (guests.length >2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

// // Printing invitation to the remainnig two guest
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you're still invited to dinnner.`);
});

// // Removing the last two names from the list
guests.pop();
guests.pop();

// // Printing the final list to confirm it's empty
console.log("Final guest list:",guests);

//Task 18
// Store the locations in an array
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];

//Print the array in its original order
console.log("Original order:", placesToVisit);

// //Print the array in alphabetical order without midifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order;", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// // Task 19
let invitations : string [] = ["ali","bilal"]
let count_invitations : number = invitations.length


console.log(`${count_invitations} people will come to the dinner`)

// Task 20
// Think of something you could store in a array. For example,you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you'd like.
// write a program that creates a list containing these items.

let country: string [] = ["Pakistan","India","NewYork","Japan","China"]
console.log("List of country:")
console.log(country)

//Task 21
//think of something you could store in a Typescript Object. Write a program
//that creates Objects containing thes items.

let person: {name: string, frame: string , age: number} = {name:"Sarosh", fname: "male", age: 23}
console.log(person)


//Task 22


const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//console.log(days{7})
console.log(days[6])

// // Task 23
let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')


console.log("is car == 'Subaru'? predict false")
console.log(car == 'Subaru')


console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.length == 6? predict true")
console.log(car.length == 6)

console.log("is car.length != 10? predict true")
console.log(car.length != 10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)


console.log("is 72 >= 63 ? predict false")
console.log(72 >= 63)

console.log("is car == 'subaru' && car.length == 6? predict true")
console.log (car == 'subaru' && car.length == 6)

//Task 24

//Tests for equality and inequality with strings

let name_1 : string = "sarosh"
let name_2 : string = "sarosh nadeem"
let name_3 : string = "muhammad sarosh nadeem"

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
}

if (name_1 != name_3){
    console.log("names are equal")
}

let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18) {
    console.log("eligible for vote")
}

if (age_1 !=22) {
    console.log("eligible for vote in older category")
}

if (age_1 <= age_2){ //less
    console.log("younger")
}


if (age_2 >= age_1){ //greater
    console.log("olderer")
}

if (age_1 == 18 && age_2 == 22 ) {
    console.log(" person is eligible for vote")
}


if (age_1 == 18 || age_2 != 22 ) {
    console.log(" person is eligible not for vote")
}

let country : string [] = ["pakistan","india","japan","china"]
if (country.includes("pakistan")){
    console.log("pakistan is in country list")
}

if (!country.includes ("america")){
    console.log("america is not include in an array")
}

//Task 25

let alien_color = "green"
if (alien_color == "green")
console.log( "you earn 5 points")

//Task 26

let alien_color = "green"

if (alien_color == "green"){
console.log( "player just earned 5 points for shooting the alien")
} else{
    console.log("player just earned 10 points")
}


let alien_color = "red"

if (alien_color == "green"){
console.log( "player just earned 5 points for shooting the alien")
} else{
    console.log("player just earned 10 points")
}

//Task 27

let alien_color = "yellow"

if (alien_color == "green"){
console.log( "5 ponts")
} else if (alien_color == "yellow") {
    console.log("10 points")
} else {
    console.log("15 points")
}


let alien_color = "red"

if (alien_color == "green"){
console.log( "5 ponts")
} else if (alien_color == "yellow") {
    console.log("10 points")
} else {
    console.log("100 points")
}

// //Task 28................2,4,13,20,65,older
let age : number = 100

if (age < 2) {
    console.log ("you are a baby")
} else if (age < 4) {
    console.log ("you are a toddler")
}
else if (age < 13) {
    console.log ("you are a kid")
}
else if (age < 20) {
    console.log ("you are a teenager")
}
else if (age < 65) {
    console.log ("you are an adult")
}else {
//     console.log("you are older")
}

//Task 29

let favourite_fruits : string [] = ["kivi","orange","apple","berry","peach"]

if (favourite_fruits.includes("kivi")) {
    console.log("kivi")
}

if (favourite_fruits.includes("apple")) {
    console.log("apple")
}

if (favourite_fruits.includes("orange")) {
    console.log("orange")
}

if (favourite_fruits.includes("berry")) {
    console.log("you really like bananas")
}

if (favourite_fruits.includes("peach")) {
    console.log("you really like bananas")
}

// Task 30
let users : string [] = ["admin","eric","haseeb","ali","fatima"]

for(let user of users){
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log (`Hello ${user}, thank you for logging in again`)
    }
}

//Task 31

let users : string [] = ["admin","eric","haseeb","ali","fatima"]

if (users.length === 0) {
    console.log ("We need to find some users!")
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log ("Hello admin, would you like to see a status report?")
        } else {
            console.log (`Hello ${user}, thank you for logging in agin`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log ("we need to find some users!")
}

//task 32

let current_users : string [] = ["admin", "Eric", "Ali", "Hamza","fatima"]
let new_users : string [] = ["admin", "fatima", "Aliza" ,"Haseeb", "Noor"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())


for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry${new_users}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
}

//Task 33

let numbers : number [] = [1,2,3,4,5,6,7,8,9,]

for (let number of numbers) {

if (number === 1) {
    console.log (`${number}st`)

} else if (number === 2) {
    console.log (`${number}nd`)

    
} else if (number === 3) {
    console.log (`${number}rd`)

    
} else {
    console.log (`${number}th`)
}
}

//Task 34

let favourite_pizza : string [] = ["pepperoni", "chicken", "veg"]

for (let pizza of favourite_pizza) {
    console.log(pizza)
}

console.log ("\n")

for (let pizza of favourite_pizza){
    console.log(` I really like $(pizza) pizza!`)
}

console.log ("\nI really love pizza!")


//Task 35

let animals : string [] = ["cat","lion","dog"]

for (let animal of animals) {
    console.log(animal)
}

for (let animal of animals){
    console.log (`A ${animal} has a tail`)
}

console.log ("\n all of these are great pets! but i love cats more")


//Task 36

function makeShirt(size : string, text: string): void {
    console.log(`you order a ${size} shirt that says ${text}`)
}

makeShirt('large','" I love typescript')
makeShirt('medium','"i need a big shirt"')


//Task 37

function makeShirt(size: string = 'large', text: string = ' I love typescript'): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}

// makeShirt();
// makeShirt('medium')

//different message
makeShirt('small', 'I need a big shirt wear')


//Task 38

function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city}is in ${country}`)
}

describe_city('karachi') // default sentence
describe_city('france', 'euro')
describe_city('lahore', 'punjab')


//Task 39

function cityCountry(city: string, country: string): string {
    return `${city},${country}`
}

let c1 = cityCountry('lahore' , 'pakistan')
let c2 = cityCountry('tokyo' , 'japan')
let c3 = cityCountry('paris', 'france')

console.log(c1)
console.log(c2)
console.log(c3)

//Task 40

function makeAlbum (artist: string, title: string): { artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() +artist.slice(1),
        title: artist.charAt(0).toUpperCase() +title.slice(1)
    
    };
    return dictionaries;
}

let album = makeAlbum("ali" ,"light")
console.log(album)


album = makeAlbum("bilal" ,"red wave")
console.log(album)


album = makeAlbum("hamza" ,"seenbreez")
console.log(album)


// //Task 41

function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["ali","hamza","bilal"];
show_magicians(magician)


// //Task 42

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {            //i stands for index string
        magicians[i] = magicians[i]  + ' the great'

}
}

const magicians2: string[] = ["usman","haseeb","wajahat"];
make_great(magicians2)
show_magicians(magicians2)


//Task 43

function make_great2(magicians: string[]): string {
    const greatMagicians: string[] = []
    for (let i = 0; i < magicians.length; i++) {            //i stands for index string
    greatMagicians.push(magicians[i]  + ' the Great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["usman","haseeb","wajahat"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

//Task 44

function sandwich(...items: string[]): void {
    console.log("sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich Muhammad Sarosh Nadeem")

sandwich('capsicum' , 'tomato', 'chicken')
sandwich('beef', 'cheese')
sandwich('garlic chicken', 'mayo sauce')

//Task 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = createCar("toyota", "corolla", { color: "silver", year: "2024"})
console.log(mycar)
