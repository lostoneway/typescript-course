"use strict";
const score = [];
const names = [];
//returns bool or number if we specify but what about strings? 
function identityOne(val) {
    return val;
}
//will take in any type and return any, NOT what we want to ever do. 
function identityTwo(val) {
    return val;
}
//what you want to do! Whatever the input type is, it will return the same type on the output! 
function identityThree(val) {
    return val;
}
// identityThree(3)
// same as identityThree() just shorthand 
function identityFour(val) {
    return val;
}
// let myBottle: Bottle = identityFour;
//taking in an array of types, the return value is ONE of those values from that array
function getSearchProducts(products) {
    //do some db operations
    const myIndex = 3;
    return products[myIndex];
}
//arrow function syntax
const getMoreSearchProducts = (products) => {
    //do some db ops 
    const myIndex = 4;
    return products[myIndex];
};
//using extends from an interface!
function anotherGenericsFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherGenericsFunction(3, { connection: "string",
    username: "your username",
    password: "your password" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
