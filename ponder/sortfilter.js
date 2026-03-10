nums = [12,3,10,1,20,13,3]
nums.sort()
console.log(nums.sort(compareFn))


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                

// function compareFn(a,b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//  return 0;
// }

let lowerList = simpleList.map(function(item){
    return item.toLocaleLowerCase()
})

let simpleSort = simpleList.sort()
console.log(simpleSort)
console.log(lowerList)

let searchTerm = 'b'
let filterFruit = lowerList.filter(searchFruit)
function searchFruit(item) {
    return item.includes(searchTerm)
}

console.log(filterFruit)


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];
                

function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}

let productSort = products.sort(compareFn);
console.log(productSort)


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let query = 'dog'

let filteredList = animals.filter(searchList);
function searchList(item){
    return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
}
console.log(filteredList)

let queryTrait = 'cuddly'
let filterByTraits = animals.filter(searchTraits)

function searchTraits(item){
    return item.traits.find(trait => 
        trait.toLowerCase().includes(queryTrait.toLocaleLowerCase())
    )
}
console.log(filterByTraits)