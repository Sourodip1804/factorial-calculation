let a = 6

// defining a function

function factorial(number){
    let arr = Array.from(Array(number+1).keys()) //this return a array
    console.log(arr.slice(1,))
    // to create for loop using arrow function
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b

    })
    console.log(c)
}
factorial(a)