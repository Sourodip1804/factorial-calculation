let a = 6

// defining a function

function factorial(number){
    let arr = Array.from(Array(number+1).keys()) //this return a array
    console.log(arr.slice(1,))

}
factorial(a)