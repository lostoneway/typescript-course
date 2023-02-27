//Union a combo of 2-3 or more types that you can include in a variable or array. Do this instead of any type 

let score: number | string = 33; 
score = 44; 
score = "55"

type User ={
    name: string,
    id: number
}
type Admin ={
    username: string,
    id: number
}

//allows me to be both a user or an admin 
let mandy : User | Admin = {name: "Mandy", id: 23}
mandy = {username:"mb", id: 23}

//syntax for union arrays 
const data: number[] = [1,2,3] //an array of nums
const data2: string[] = ["1","2","3"] //an array of strings
const data3: (string | number)[] = [1,2,"3"] //an array of nums and strings

// be strict homie!
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle" //this works! 
seatAllotment = "crew" // does not work! no asssignable to the type we defined!