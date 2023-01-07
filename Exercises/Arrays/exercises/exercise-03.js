const prices = [ 1.23, 19.99, 85.2, 32.87, 8, 5.2]

const taxedPrices = prices.map(item => {
    if(item > 10) {
        return item + (item * 0.2)
    } else {
        return item
    }
})

console.log(prices)
console.log(taxedPrices)