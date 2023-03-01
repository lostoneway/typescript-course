//type guards!

function detectType(val: number | string){
    if(typeof val === "string"){
       return  val.toLowerCase();
    }
    return val + 3
}

//appreciated code!
function provideId(id:string | null){
    if(!id){
        console.log("Please provide an ID")
        return
    }
    id.toLowerCase();
}

//don't do this! we haven't covered for an empty string ""
function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

//using in operator 
interface User {
    name: string, 
    email: string, 
}

interface Admin {
    name: string, 
    email: string, 
    isAdmin: boolean
}

//if prop "isAdmin" is IN the account return account.isAdmin, accounts are User and Admin
function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}