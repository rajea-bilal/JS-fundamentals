const array = [10, 20, 30, 40, 50]

const arrayCopy1 = []

for(const item of array) {
    arrayCopy1.push(item)
}

arrayCopy1.push(60)
// console.log(array)
// console.log(arrayCopy1)

// const arrayCopy2 = [...array]
// console.log(arrayCopy2)
// arrayCopy2.push(70)
// console.log(arrayCopy2)

// String Spread Operator

const phrase = "Hellow, my friend!"

const copy = [...phrase]

console.log(copy)

// Set spread

const mySet = new Set() 

mySet.add("Batman")
mySet.add("Robin")
mySet.add("Spiderman")
mySet.add("Batman")

console.log(mySet)

const mySetCopy = [...mySet, "Batman"]

console.log(mySetCopy)