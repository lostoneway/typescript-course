//notice how num is before string, because position doesn't matter when declared this way
// const user:(string | number)[] = [1, "hc"] 

//convert to a tuple, position MATTERS!
let tUser:[string, number, boolean]
tUser = ["mb",23, false] 

//type defined as a tuple! 
type User = [number, string]
const newUser: User = [112, "example#@gmail.com"]

//readup on tuples and array methods like push! 

export{}