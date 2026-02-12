let pets = ['bunny','goldfish','rhino'];
console.log(pets.length);

pets[0] = 'bunny';

console.log(pets);

pets.push('lizard');

console.log(pets);

const steps = ['one','two','three']

// steps.forEach(function(item){
//     console.log(item)
// });

steps.forEach(showsteps);

function showsteps(item) {
    console.log(item)
};

let myList = document.querySelector('#myList')

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`
};

myList.innerHTML = stepsHtml.join('');

let grades = ['A','A','A'];

let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C:':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break
        default:
            alert("Not a valid grade!");

    }
    return points;
};

console.log(gpaPoints);
console.log(grades);

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item
}

console.log(totalPoints)

let gpaAverage = totalPoints/gpaPoints.length;

console.log(gpaAverage)

const words = ['watermelon','peach','apple','tomato','grape']

const shortWords = words.filter(function(word){
    return word.length < 6;
})
console.log(shortWords)

const classes = [
    {name: 'WDD131  ', credits:2},
    {name: 'CSE170  ', credits:2},
    {name: 'ITM455  ', credits:4},
];

let container = document.querySelector('#classes');

classes.forEach(function(item){
let name = document.createElement('div');

let html = `
    <span>${item.name}</span>
    <span>${item.credits}</span>

`

name.innerHTML = html;

container.appendChild(name)
})