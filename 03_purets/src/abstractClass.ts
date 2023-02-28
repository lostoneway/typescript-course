//abstract classes

abstract class TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        //do some calculation 
        return 8 //whatever the result is of the calculation
    }
}
// NOTE: you cannot make a new object from an abstract class, it is a blueprint only 
// const  morgan = new TakePhoto("test", "test2") //will not work

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        //constructors of a derived class must contain a super call within 
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("It's Sepia!")
    }

}

//create a new obj!
const  morgan = new Instagram("test", "test2", 4)
// can be used because it is a part of the abstract class, abstract classes help classes inheriting them a better structure
morgan.getReelTime() 
