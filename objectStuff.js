let destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}


// Create a function called destructed that recieves the destructMe dictionary using destructuring. Destruct the title body and author and leave the rest of the attributes in a parameter called others. Print out the title, body, and author to the console. Then print the entire contents of others to the console.


function destructed({ title, body, author, ...other }){
    console.log(title, body, author);
    console.log(other);
}


destructed(destructMe);


let friendObj1 = {
    name: 'Jack',
    friends: ['John', 'Joe', 'Jim']
};

let friendObj2 = {
    name: 'Kylie'
}


friendObj1.friends.push('Jeremy');
console.log(friendObj1);

friendObj2.friends?.push('Kendall');
console.log(friendObj2);


let movies = [
    { id: 1, title: 'Oppenheimer', releaseYear: 2023, studio: { name: 'Warner Bros'}},
    { id: 2, title: 'The Dark Knight', releaseYear: 2009, studio: { name: 'Sony'}},
    { id: 3, title: 'Gladiator', releaseYear: 2001}
]

console.log(movies);

for (let movie of movies){
    console.log(movie.studio?.name);
}

// condition ? ifTrue : ifFalse

for (let movie of movies){
    console.log(movie.studio ? movie.studio.name : undefined)
}

let movies2 = [
    { id: 1, title: 'Oppenheimer', releaseYear: 2023, studio: { name: 'Warner Bros', address: {street: 'Rodeo Dr', city: 'Los Angeles'}}},
    { id: 2, title: 'The Dark Knight', releaseYear: 2009, studio: { name: 'Sony', address: {street: 'Shibuya', city: 'Tokyo'}}},
    { id: 3, title: 'Gladiator', releaseYear: 2001}
]

console.log('-----------------------------')

for (let m of movies2){
    console.log(m.studio?.address?.city);
}

for (let m of movies2){
    console.log(m.studio ? m.studio.address ? m.studio.address.city : undefined : undefined)
}

// Nullish Coalescing Operator (??)
console.log(`${friendObj1.name}: ${friendObj1.friends ?? 'has no friends' }`)
console.log(`${friendObj2.name}: ${friendObj2.friends ?? 'has no friends' }`)


for (let movie of movies){
    console.log(`${movie.title} released in ${movie.releaseYear} -- Studio: ${movie.studio?.name ?? 'Independent' }`)
}


console.clear();


// Object Equality
// In JS, two objects are considered equal ONLY if they refer to the same object in memory

let objX = {id: 1};
let objY = {id: 1};

console.log('X', objX)
console.log('Y', objY)

console.log(objX == objY); // false
console.log(objX === objY); // false

let objZ = objX;
console.log('Z', objZ)

console.log(objX === objZ); // true - because objX and objZ are the same object!
console.log(objY === objZ); // false

console.log(objX.id == objY.id); // true

// Same the applies to Array - because Array is an object
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // false
console.log(arr1 === arr3); // true
console.log(arr2 === arr3); // false

// Checking for Empty Objects/Arrays
let testObj = {}

if (testObj){
    console.log('testObj is true');
} else {
    console.log('testObj is false');
};

let testArr = [];

if (testArr){
    console.log('The testArr is true');
} else {
    console.log('The testArr is false');
};



// With an Array, to see if it is empty, we can use the .length property
// remember all non-zero numbers are true, but 0 is false

if (testArr.length){
    console.log('The testArr.length is true')
} else {
    console.log('The testArr.length is false')
}

// With an Object, first access the keys of the object, and get the length of that
// Object.keys(obj) -> arr of keys

testObj = {
    a: 123,
    b: 456
}

console.log(Object.keys(testObj));

if (Object.keys(testObj).length){
    console.log('The testObj keys have length')
} else {
    console.log('The testObj keys are empty')
}


let person1 = {
    name: "Janet",
    city: "Louisville",
    isGoodCoder: true
};


console.log(Object.keys(person1));

console.log(Object.values(person1));

console.log(Object.entries(person1));

// Traditional For Loop for Objects - pre ES6
for (let i=0; i < Object.keys(person1).length; i++){
    console.log(i);
    console.log('Key:', Object.keys(person1)[i]);
    console.log('Value:', Object.values(person1)[i]);
    console.log('Value2:', person1[Object.keys(person1)[i]])
}


// ES6 marked the introduction of the for...in loop!
// for...in loop will loop over the keys of an object

// for (let varName in objectName){
    // do stuff
// }

for (let key in person1){
    console.log('Key:', key);
    console.log('Value:', person1[key])
}


// for...in vs for...of

let euroCountries = ['Spain', 'France', 'England', 'Germany', 'Poland', 'Italy'];

console.log('for...of');
for (let country of euroCountries){
    console.log(country);
};


console.log('for...in');
for (let country in euroCountries){
    console.log(country);
};

console.log(typeof euroCountries); // object
// To determine if an object is an Array, use the Array.isArray() static method
console.log(Array.isArray(euroCountries)); // true

console.log(Array.isArray(person1)) // false



// Returning an Object from an arrow function (implicit return)

function createArray(){
    return [1, 2, 3, 4]
};

let returnedArr1 = createArray();
console.log(returnedArr1);

const createArrayArrow = () => [1, 2, 3, 4]

let returnedArr2 = createArrayArrow();
console.log(returnedArr2);


function createObj(){
    return {id: 123, name: 'Coding Temple'}
}

let returnedObj1 = createObj();
console.log(returnedObj1);

// If you want to implicitly return an object in an arrow function,
// wrap it in parnetheses
const createObjArrow = () => ({id: 123, name: 'Coding Temple'})

let returnedObj2 = createObjArrow();
console.log(returnedObj2);

console.clear();

//////////
// this //
//////////

let thisObject = {
    firstName: 'Zach',
    lastName: 'Edey',
    fullNameRegular: function(){return this.firstName + ' ' + this.lastName},
    fullNameArrow: () => this.firstName + ' ' + this.lastName
}


console.log(thisObject);

console.log(thisObject.fullNameRegular()); // Zach Edey
console.log(thisObject.fullNameArrow()); // undefined undefined


let anotherThis = {
    getThisReg: function(){return this},
    getThisArrow: ()=>this
}

console.log('Outside of Function', this);

console.log('Regular Function', anotherThis.getThisReg());

console.log('Arrow Function', anotherThis.getThisArrow());


function sayHello(){
    return 'Hello ' + this.name
}

let p1 = {
    name: 'Franklin',
    age: 22,
    greet: sayHello
};

let p2 = {
    name: 'Danielle',
    age: 33,
    greet: sayHello
};


console.log(p1.greet());
console.log(p2.greet());
