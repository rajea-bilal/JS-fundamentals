const bools = [true, true, false, true, false, false]

const randomNum = bools.map(item => {
    if(item === true){
        return Math.random()
    } else {
        return 0
    }
})

console.log(bools)
console.log(randomNum)