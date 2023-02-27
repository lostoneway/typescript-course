//similar to type 

interface Member{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string): number
}

//reopening the interface
interface Member {
    githubToken: string
}
//inheritance via extends
interface Admin extends Member {
    role: "admin" | "ta" | "learner"
}

//making a new member 
const rachael: Member = {dbId:23, email: "rach@rach.com", 
userId: 12,
githubToken: "github",
startTrail: () => {
    return "trail has started"}, 
    getCoupon: (name: "save10") => {
    return 10
}}

//making a new Admin
const morgan: Admin = {dbId:23, email: "mo@mo.com", 
userId: 13,
githubToken: "githubRocks",
role: "ta",
startTrail: () => {
    return "trail has started"}, 
    getCoupon: (name: "save10") => {
    return 10
}}
//need to update something on Member for rach?
rachael.email = "newrach@newemail.com"
