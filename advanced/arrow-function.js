// const square = num => num * num;

// console.log(square(5));

// const squareLong = num => {
//     return num * num;
// };

const people = [
    {
        name: 'Bdog',
        age: 45
    },
    {
        name: 'Molly',
        age: 5
    }
];

// const under30 = people.filter(function(person) {
//     return person.age < 30;
// });
// const under30 = people.filter(person => person.age < 30);

// console.log(under30);

const under22 = people.find(person => person.age === 45);

console.log(under22.name);
