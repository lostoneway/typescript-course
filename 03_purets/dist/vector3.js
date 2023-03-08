"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(otherVector3) {
        return new Vector3(this.x + otherVector3.x, this.y + otherVector3.y, this.z + otherVector3.z);
    }
}
exports.Vector3 = Vector3;
