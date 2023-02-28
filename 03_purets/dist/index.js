"use strict";
//one way to write this with this.blah and so on
// class User{
//     //make User class aware of constructor params
//     email: string;
//     name: string;
//    private city: string = "New York" //makes this no accessible
//     constructor(email: string , name: string){
//         this.email = email;
//         this.name = name
//     }
// }
//make a new User
// const steven = new User("steven@steven.gmail", "Steven")
//another way to write so you don't have to say this.blah and produces same code.
// just declare the parms in your constructor as public or private and it'll compile down the the this. whatever in JS
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "New York"; //makes this not accessible
    }
    //getters use to get any property so any private method can be exposed outside
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setters, key thing to remember, there should be no return type!
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamilyMember = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const steven = new User("steven@steven.gmail", "Steven");
