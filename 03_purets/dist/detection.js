"use strict";
//type guards!
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
//appreciated code!
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    id.toLowerCase();
}
//don't do this! we haven't covered for an empty string ""
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
//if prop "isAdmin" is IN the account return account.isAdmin, accounts are User and Admin
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instanceof useful for most vals that can be constructed with the new keyword checks if this obj is an instance of a class or interface
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//checks if pet is a Fish,  here the return type is the type predicate seen as parmName is Type
function isFish(pet) {
    //if (pet as Fish) has a method of swim that is NOT undefined it is indeed a fish!
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird fish";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
//using a switch case with exhaustiveChecking. This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement. It will yell at you if you don't have all "kinds" of shapes in your switch to check! 
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
