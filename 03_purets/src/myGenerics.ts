const score: Array<number> = [];
const names: Array<string> = [];

//returns bool or number if we specify but what about strings? 
function identityOne(val: boolean | number): boolean | number {
    return val
}

//will take in any type and return any, NOT what we want to ever do. 
function identityTwo(val: any): any {
    return val
}

//what you want to do! Whatever the input type is, it will return the same type on the output! 
function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(3)
// same as identityThree() just shorthand 

function identityFour<T>(val: T): T {
    return val;
}

//works for Interfaces too! Weird gotta read the docs on this one
interface Bottle{
    <T>(val:T): T;
}
// let myBottle: Bottle = identityFour;

//taking in an array of types, the return value is ONE of those values from that array
function getSearchProducts<T>(products: T[]): T{
    //do some db operations
    const myIndex = 3
    return products[myIndex]
}

//arrow function syntax
const getMoreSearchProducts = <T>(products: T[]): T => {
    //do some db ops 
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string, 
    username: string, 
    password: string
}

//using extends from an interface!
function anotherGenericsFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne, 
        valTwo
    }
}
anotherGenericsFunction(3, { connection: "string", 
    username: "your username", 
    password: "your password"});

// Classes 
interface Quiz {
    name: string, 
    type: string, 
}   

interface Course{
    name: string, 
    author: string, 
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}