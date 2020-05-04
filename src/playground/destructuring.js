//Object Destructuring
// const person = {
//     name: 'Shashank',
//     age: 24,
//     location: {
//         city: 'Bengaluru',
//         temp: 30
//     }
// };

// const {name: firstName = 'Manjot', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature ){

//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is in the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }
// const {name: publisherName = 'Self-Publisher'} = book.publisher
// console.log(publisherName);

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '191947'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product,,medium] = item;
console.log(`A medium ${product} costs ${medium}`);

