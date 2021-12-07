const person = {
    firstName: "Armandina",
    lastName: "Atom",
};

//spread
let p1 = {
    ...person,
};

//Object.assign()
let p2 = Object.assign({}, person);

//JSON
let p3 = JSON.parse(JSON.stringify(person));

console.log(p1);
console.log(p2);
console.log(p3);

let copiedPerson = person;
copiedPerson.firstName = "Richárd";
console.log(person);
//a változó értéke az egy reference típusú érték

let num = 1;
let copiedNum = num;

copiedNum = 2;
console.log(num);
//a változó értéke az egy primitive típusú érték

//Shallow copy example
let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson2 = Object.assign({}, person2);
copiedPerson2.firstName = "Richárd";
copiedPerson2.address.street = "példa utca";

console.log(copiedPerson2);


//Example
let person3 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson3 = JSON.parse(JSON.stringify(person3));

copiedPerson3.firstName = "Józsi";
copiedPerson3.address.street = "Fő utca";

console.log(person3);
