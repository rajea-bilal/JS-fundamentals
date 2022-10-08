// even numbers between 10 and 40
const min = 10
const max = 40
let result = min


// while(result % 2 === 0 && result <= max){
//     console.log(result)
//     result+=2
// }

// odd mumbers between 10 and 40
while(result <= 40){
    if(result % 2 === 0) {
        console.log(`even number: ${result}`)
    } else {
       console.log(`odd number: ${result}`)
    }
    result++
}