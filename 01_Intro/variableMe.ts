let greetings: string = "Hello Mandy";
// let myNum = 6
// myNum.toUpperCase()
// greetings.toLowerCase()
console.log(greetings);

//number 
let userId: number = 420

//bool
let isLoggedIn: boolean = false

/* type inference
Here TS is smart enough to know from looking at the right side of the = that the type is number 
and you don't have to specify it like we dud on line 8! This makes for cleaner code, 
you can hover over the variable and see the type. */
let phoneNumber = 3345431234
phoneNumber.toFixed()

//any it's not a special type it is a marker, I don't want to do the type checking. You want to usually avoid this. 
let hero;

function getHero(){
    return 'thor'
}

export{} //removes errors temporarily 