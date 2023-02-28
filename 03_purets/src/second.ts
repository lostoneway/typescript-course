interface TakePhoto {
    cameraMode: string, 
    filter: string, 
    burst: number
}

interface Story {
    createStory(): void
}
//Creating a class to implement items from your interface TakePhoto

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

//YouTube to implement both TakePhoto and Story
class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
//must create the method from Story inside this class as well to use it
    createStory(): void {
        console.log("Story was created.");
        
    }
}