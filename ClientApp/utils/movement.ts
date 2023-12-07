import Constants from "~/Constants";
import { Vector } from "~/classes/vector";

const applyVelocity = (position: number, velocity: number): number => position + velocity;

const applyAcceleration = (velocity: number, acceleration: number, maxVelocity: number): number => (velocity + acceleration) > maxVelocity ? maxVelocity : velocity + acceleration;

const toOpositeVelocity = (velocity: number): number => velocity * -1 * Constants.velocityLossRate;

const toOpositeAcceleration = (acceleration: number): number => acceleration * -1;

const getDistance = (a: Vector, b: Vector): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export { applyVelocity, applyAcceleration, toOpositeVelocity, toOpositeAcceleration, getDistance }