let a = 6

// defining a function

function factorial(number){
    //short method to make a array
    let arr = Array.from(Array(number+1).keys()) //this return a array
    // console.log(arr.slice(1,))
    // to create for loop using arrow function
    // let c = arr.slice(1,).reduce((a,b)=>{
    //     return a*b
    // or this can be written by using the short cut of arrow function 
    
    let c = arr.slice(1,).reduce((a,b)=> a*b)
    return c
    // console.log(c)
}

function facFor(number){
    let fac = 1;
    for (let i = 0; i <= number; i++) {
        const element = array[i];
        
    }
}

factorial(a)