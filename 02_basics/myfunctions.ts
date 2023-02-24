function addTwo(num: number) : number{
    return num + 2
    // return "hello" (string type is not returnable here since we said num was the return type after the params!)
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string,email:string, isPaid:boolean){}

//to set a default value so you don't get an error if you want to only pass on 2 of the 3 parms
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("string homie")
signUpUser("Charlie", "charlie@cat.dev", false)
loginUser("meep","meep@aleap.com")

//how to make sure you have a strict return
//this would work if we changed the return in function body to type "return hello" without declaring what type we want to return after the params
//if we want to declare the return type of the function as a number along with the params!
let myValue = addTwo(5) 

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

//basic arrow functions 
const getHello = (s:string):string =>{
    return ""
}

const heroes = ["thor","wonderwoman","flash"]

//map over heroes array, typescript knows  with my implictily saying the parm is a string 
//but you DO want to implictily say what is the type of value we are returning
heroes.map((hero): string => {
    return `A hero is ${hero}`
})

//two functions you may use, console your error and actually handling the error
//console the error, good practice is to implicitly express what you want to return if anything, in this case void , so return nothing
function consoleError(errMsg: string): void{
    console.log(errMsg)
}

//handle the error, not good practice to use void here, you want to use never (makes your error handling more robost)
//it NEVER returns a value! So you can't have never and console.log(errMsg) since it is a reachable endpoint
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}

export{}