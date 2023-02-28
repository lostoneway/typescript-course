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