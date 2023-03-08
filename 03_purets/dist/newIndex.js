"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vectors_1 = require("./vectors");
const vec2a = new vectors_1.Vector2(1, 2);
const vec2b = new vectors_1.Vector2(2, 1);
console.log(vec2a.add(vec2b));
const vec3a = new vectors_1.Vector3(1, 2, 3);
const vec3b = new vectors_1.Vector3(3, 2, 1);
console.log(vec3a.add(vec3b));
