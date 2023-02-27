// const User ={
//     name: "Mandy",
//     email: "mandy@mandy.com",
//     isActive: true
// }

function createUser({name: string, isPaid: boolean}){}

createUser({name:"hitesh",isPaid: false}) // here the paras must match those of the function

//here we are creating an obj with an extra param but using the createUser method so it doesn't complain about the extra param
let newUser = {name:"hitesh",isPaid: false, email: "h@h.com"}
createUser(newUser)

//functionname (parameter): {return type}{definition}
function createCourse() :{name: string, price:number} {
    return {name:"typescript", price:100}
}

//type alias
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
// function generateUser(user:User): User{
//     return{name:"", email:"", isActive:true} //must pass in properties from type User
// }
// generateUser({name:"", email:"", isActive:true})

type User ={
    readonly _id: string //say MongoDB is creating your id and you don't want anyone to change it, mark it readonly with _ to show private
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number //? marks this property as optional.
}

let myUser: User = {
    _id: "420",
    name: "Charlie",
    email: "charlie@cat.dev",
    isActive: true
}

myUser.email = "charlie@techcat.dev"
// myUser._id ="wee" //can't change! hover over to see error

//using existing type alias to create a new type with credit card as an example.

type cardNumber = {
    cardnumber: string
}
type cardExpDate = {
    cardexpdate: string
}
//now use the two above to make a new type! plus a new object with cvv.
//adding the cvv is not a great exaample and kind of hacky but the first two are good.
type cardDetails = cardNumber & cardExpDate & {
    cvv: number
}
export{}