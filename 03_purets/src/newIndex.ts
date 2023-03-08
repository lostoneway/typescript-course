import { Vector2 as Vec2, Vector3 as Vec3 } from "./vectors";

const vec2a = new Vec2(1, 2);
const vec2b = new Vec2(2, 1);
console.log(vec2a.add(vec2b));

const vec3a = new Vec3(1, 2, 3);
const vec3b = new Vec3(3, 2, 1);

console.log(vec3a.add(vec3b));