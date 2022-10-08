let loggedIn = false

let loop = 0
while (loggedIn === false && loop < 4) {
    console.log("Incorrect login credentials")
    console.log(loop)
    loop++
    if(loop === 3) {
        loggedIn = true
        console.log("Successfully logged in")
    }
}

console.log(loggedIn)
