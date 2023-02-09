const prompt = require('prompt-sync')({sigint: true})

/*
Write a function called sayHi that takes in a name string and 
adds "Hi, " before the name. Return the newly modified string.
*/

console.log(`1. sayHi:`)
function sayHi(x) {
    let result = `Hi ` + x
    return result
}
console.log(sayHi(`Kosta`))
console.log()
console.log()

/*
Write a function called bigString that takes in 2 strings and 
returns which one is bigger. If the strings are equal in size, 
return a string that indicates this to the user instead.
*/

console.log(`2. bigString:`)
function bigString(x,y) {
    if (x.length>y.length) {
    return x
    } else if (y.length>x.length) {
    return y
    }
    return `Equal in size`
}

console.log(bigString('test','test2'))
console.log(bigString('lion','tiger'))
console.log(bigString('boar','deer'))
console.log()
console.log()

/*
Write a function called bigNumber that takes in 2 numbers 
and returns which one is greater. If the numbers are equal 
return a string that indicates the two numbers are equal 
instead.
*/

console.log(`3. bigNumber:`)
function bigNumber(x,y) {
    if (x > y) {
        return x
    } else if (y > x) {
        return y
    }
    return `The two numbers are equal`
}
console.log(bigNumber(5,8))
console.log(bigNumber(4,2))
console.log(bigNumber(3,3))
console.log()
console.log()

/*
Write a function called fiveMoreOdd that takes in an array 
of numbers and adds 5 to each odd number then returns the 
updated array.
*/

console.log(`4. fiveMoreOdd:`)
let y = [1, 4, 2, 3, 9, 12]
console.log(y)
function fiveMoreOdd(x){
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
        x[i] = x[i] + 5
        }
    }
    return x
}
console.log(fiveMoreOdd(y))
console.log()
console.log()

/*
Write a function called arraySummer that takes in an 
array of numbers and adds each number in the array together. 
Return the total.
*/

console.log(`5. arraySummer:`)
console.log(y)
function arraySummer(x) {
    g = 0
    for (let i = 0; i < x.length; i++) {
    g = g + x[i]
    }
    return g
}
console.log(Number(arraySummer(y)))
console.log()
console.log()

/* 
Write a function called everyDivisible that takes in a 
number n then prints every number less than or equal to 100 
that is divisible that number n.
*/

console.log(`6. everyDivisible:`)
let n = Number(prompt('Enter a number: '))
function everyDivisible(x) {
    z = 0
    while (z <= 100) {
        z = z + x
        if (z <= 100) {
            console.log(z)
        }
    }
}   
everyDivisible(n)

