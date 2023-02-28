"use strict";
//Creating a class to implement items from your interface TakePhoto
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//YouTube to implement both TakePhoto and Story
class YouTube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //must create the method from Story inside this class as well to use it
    createStory() {
        console.log("Story was created.");
    }
}
