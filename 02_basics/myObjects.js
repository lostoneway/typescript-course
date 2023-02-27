"use strict";
// const User ={
//     name: "Mandy",
//     email: "mandy@mandy.com",
//     isActive: true
// }
exports.__esModule = true;
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false }); // here the paras must match those of the function
//here we are creating an obj with an extra param but using the createUser method so it doesn't complain about the extra param
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);
//functionname (parameter): {return type}{definition}
function createCourse() {
    return { name: "typescript", price: 100 };
}
var myUser = {
    _id: "420",
    name: "Charlie",
    email: "charlie@cat.dev",
    isActive: true
};
myUser.email = "charlie@techcat.dev";
